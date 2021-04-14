using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Helpers;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NBAapi.Data;

namespace NBAapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecalcController : ControllerBase
    {
        private readonly ApiDbContext _context;
        private readonly double _pointsWeight = 0.5;
        private readonly double _fieldGoalWeight = 0.3;
        private readonly double _threePointWeight = 0.2;

        public RecalcController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/Recalc   // becomes our WebHook to trigger a recalc of percentages based on 'weighted' nba team data points
        [HttpGet]
        [Route("predictions")]
        public async Task<string> RecalculatePredictions() // RecalculateWinPercentages()
        {
            // return await _context.Games.ToListAsync();

            var gamesList = await _context.Games.ToListAsync();

            foreach (var row in gamesList)
            {
                var homeTeamId = row.HomeTeamId;
                var visitorTeamId = row.VisitorTeamId;

                // pull in team info related to this game
                Tuple<double, double, double> homeData = await getHomeTeamData(homeTeamId);

                double homePoints = homeData.Item1;
                double homeFieldGoal = homeData.Item2;
                double homeThreePoint = homeData.Item3;

                int homeWinPercent = RecalcHelper.recalcWinPercentage(homePoints, homeFieldGoal, homeThreePoint, _pointsWeight, _fieldGoalWeight, _threePointWeight);

                Tuple<double, double, double> visitorData = await getVisitorTeamData(visitorTeamId);

                double visitorPoints = visitorData.Item1;
                double visitorFieldGoal = visitorData.Item2;
                double visitorThreePoint = visitorData.Item3;

                int visitorWinPercent = RecalcHelper.recalcWinPercentage(visitorPoints, visitorFieldGoal, visitorThreePoint, _pointsWeight, _fieldGoalWeight, _threePointWeight);

                // Calculations
                double total = homeWinPercent + visitorWinPercent;
                double homePercent = homeWinPercent / total * 100;
                double visitorPercent = visitorWinPercent / total * 100;
                double difference = 0.0;
                if (homePercent > visitorPercent)
                {
                    difference = (homePercent - visitorPercent) * 3;
                    homePercent += difference;
                    visitorPercent -= difference;
                }
                else
                {
                    difference = (visitorPercent - homePercent) * 3;
                    homePercent -= difference;
                    visitorPercent += difference;
                }

                row.HomePercent = Convert.ToInt32(homePercent);
                row.VisitorPercent = Convert.ToInt32(visitorPercent);
                row.HomePointsPayout = Convert.ToInt32(visitorPercent);
                row.VisitorPointsPayout = Convert.ToInt32(homePercent);

            }
            _context.SaveChanges();

            return "success";

        }

        private async Task<Tuple<double, double, double>> getHomeTeamData(int teamId)
        {
            var teamRow = await _context.Teams.FindAsync(teamId);

            double points = teamRow.HomePoints;
            double fieldGoal = teamRow.HomeFieldGoalPercent;
            double threePoint = teamRow.HomeThreePointPercent;

            return new Tuple<double, double, double>(points, fieldGoal, threePoint);
        }

        private async Task<Tuple<double, double, double>> getVisitorTeamData(int teamId)
        {
            var teamRow = await _context.Teams.FindAsync(teamId);

            double points = teamRow.AwayPoints;
            double fieldGoal = teamRow.AwayFieldGoalPercent;
            double threePoint = teamRow.AwayThreePointPercent;

            return new Tuple<double, double, double>(points, fieldGoal, threePoint);
        }

        // GET: api/Recalc/payouts  // becomes our WebHook to trigger a recalc of percentages
        [HttpGet]
        [Route("payouts/v1")] // ================================================================================================= v1
        public async Task<List<GameVoteResponse>> RecalculatePayouts()
        {
            
            // 1. get all games that have final scores and also where users have voted on that game
            // INNER JOIN
            var gameVotesList = await (from g in _context.Games
                                       join vt in _context.Votes on g.Id equals vt.GameId
                                       where (g.HomeFinalScore > 0 && g.VisitorFinalScore > 0)
                                       orderby g.Id, vt.AccountId
                                       select new GameVoteResponse
                                       {
                                           GameId = g.Id,
                                           VoteId = vt.Id,
                                           AccountId = vt.AccountId,
                                           VotedForTeamId = vt.VotedForTeamId,
                                           PointsAwarded = vt.PointsAwarded,
                                           HomeFinalScore = g.HomeFinalScore,
                                           VisitorFinalScore = g.VisitorFinalScore,
                                           HomePointsPayout = g.HomePointsPayout,
                                           VisitorPointsPayout = g.VisitorPointsPayout,
                                           HomeTeamId = g.HomeTeamId,
                                           VisitorTeamId = g.VisitorTeamId
                                       }).ToListAsync();

            // test count
            var gameVotesCount = gameVotesList.Count();

            // can test in Postman using /api/recalc/payouts/v1
            return gameVotesList;
        }

        // GET: api/Recalc/payouts  // becomes our WebHook to trigger a recalc of percentages
        [HttpGet]
        [Route("payouts/v2")] // ================================================================================================= v2
        public async Task<bool> RecalculatePayouts2()
        {
            

            // 1. get all games that have final scores and also where users have voted on that game
            //  INNER JOIN
            var gameVotesList = await (from g in _context.Games
                                       join vt in _context.Votes on g.Id equals vt.GameId
                                       where (g.HomeFinalScore > 0 && g.VisitorFinalScore > 0)
                                       orderby g.Id, vt.AccountId
                                       select new GameVoteResponse
                                       {
                                           GameId = g.Id,
                                           VoteId = vt.Id,
                                           AccountId = vt.AccountId,
                                           VotedForTeamId = vt.VotedForTeamId,
                                           PointsAwarded = vt.PointsAwarded,
                                           HomeFinalScore = g.HomeFinalScore,
                                           VisitorFinalScore = g.VisitorFinalScore,
                                           HomePointsPayout = g.HomePointsPayout,
                                           VisitorPointsPayout = g.VisitorPointsPayout,
                                           HomeTeamId = g.HomeTeamId,
                                           VisitorTeamId = g.VisitorTeamId
                                       }).ToListAsync();

            // test count
            var gameVotesCount = gameVotesList.Count();

            // for each game that has a vote, loop through and award user their payout
            foreach (var row in gameVotesList)
            {
                // first check if home team won
                if (row.HomeFinalScore > row.VisitorFinalScore)
                {
                    //then check if home team won and user voted for home team
                    if (row.VotedForTeamId == row.HomeTeamId)
                    {
                        // then reward user with payout for voting correctly on this game
                        await UpdatePayoutPerVotePerUser(row.VoteId, row.HomePointsPayout);
                    }
                }
                // next check if visitor team won and user voted for visitor team
                if (row.VisitorFinalScore > row.HomeFinalScore)
                {
                    //then if user voted for home, award user the payout value
                    if (row.VotedForTeamId == row.VisitorTeamId)
                    {
                        // then reward user with payout for voting correctly on this game
                        await UpdatePayoutPerVotePerUser(row.VoteId, row.VisitorPointsPayout);
                    }
                }
            }


            // final step - now get total points for each user in the Votes table and update the TotalPoints Earned in each account

            // get a distinct list of userIds in the votes table and get the total points for each

            // in DBeaver =======
            // SELECT  
            // v.AccountId,
            // SUM(v.PointsAwarded) AS TotalPoints
            // FROM Votes v 
            // GROUP BY v.AccountId 
            // ORDER BY v.AccountId 

            // from https://stackoverflow.com/questions/37338860/linq-sum-with-group-by
            // from https://www.pluralsight.com/guides/grouping-aggregating-data-linq
            // from https://entityframework.net/knowledge-base/13988800/linq-to-sql-group-by-and-sum-in-select
            // from https://riptutorial.com/csharp/example/17012/groupby-sum-and-count
            var totalPayoutsPerUserList = await _context.Votes
            .GroupBy(vts => vts.AccountId)
            .Select(vts => new
            {
                AccountId = vts.Key,
                TotalPoints = vts.Sum(pts => pts.PointsAwarded),
            }).ToListAsync();

            // loop through each user, get their total payout and update their account (TotalPoints Earned)
            foreach (var row in totalPayoutsPerUserList)
            {
                await UpdateUsersTotalPointsEarned(row.AccountId, row.TotalPoints);
            }

            return true;
        }

        private async Task<bool> UpdatePayoutPerVotePerUser(int voteId, int payoutAmount)
        {
            var voterow = await _context.Votes.FindAsync(voteId);
            if (voterow != null)
            {
                // then update user with payout amount
                voterow.PointsAwarded = payoutAmount;
                _context.Votes.Update(voterow);
                await _context.SaveChangesAsync();
                return true;
            }
            else
            {
                return false;
            }
        }

        private async Task<bool> UpdateUsersTotalPointsEarned(int accountId, int totalPointsEarnedFromAllVotes)
        {
            var user = await _context.Accounts.FindAsync(accountId);
            if (user != null)
            {
                // then update user with payout amount
                user.TotalPointsEarned = totalPointsEarnedFromAllVotes;
                user.TotalPointsBalance = totalPointsEarnedFromAllVotes - user.TotalPointsSpent;
                _context.Accounts.Update(user);
                await _context.SaveChangesAsync();
                return true;
            }
            else
            {
                return false;
            }
        }

       
    }
}
