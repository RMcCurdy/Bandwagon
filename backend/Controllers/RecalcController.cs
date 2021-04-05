using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Helpers;
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

        // GET: api/Recalc   // becomes our WebHook to trigger a recalc of percentages
        [HttpGet]
        public async Task<string> RecalculateWinPercentages()
        {
            // return await _context.Games.ToListAsync();

            var gamesList = await _context.Games.ToListAsync();

            foreach(var row in gamesList)
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
                double homePercent = homeWinPercent/total * 100;
                double visitorPercent = visitorWinPercent/total * 100;
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

        private async Task<Tuple<double, double, double>> getHomeTeamData (int teamId)
        {
            var teamRow = await _context.Teams.FindAsync(teamId);

            double points = teamRow.HomePoints;
            double fieldGoal = teamRow.HomeFieldGoalPercent;
            double threePoint = teamRow.HomeThreePointPercent;

            return new Tuple<double, double, double>(points, fieldGoal, threePoint);
        }

        private async Task<Tuple<double, double, double>> getVisitorTeamData (int teamId)
        {
            var teamRow = await _context.Teams.FindAsync(teamId);

            double points = teamRow.AwayPoints;
            double fieldGoal = teamRow.AwayFieldGoalPercent;
            double threePoint = teamRow.AwayThreePointPercent;

            return new Tuple<double, double, double>(points, fieldGoal, threePoint);
        }



        //// GET: api/Recalc/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Game>> GetGame(int id)
        //{
        //    var game = await _context.Games.FindAsync(id);

        //    if (game == null)
        //    {
        //        return NotFound();
        //    }

        //    return game;
        //}

        //// PUT: api/Recalc/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutGame(int id, Game game)
        //{
        //    if (id != game.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(game).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!GameExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/Recalc
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<Game>> PostGame(Game game)
        //{
        //    _context.Games.Add(game);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetGame", new { id = game.Id }, game);
        //}

        //// DELETE: api/Recalc/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteGame(int id)
        //{
        //    var game = await _context.Games.FindAsync(id);
        //    if (game == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Games.Remove(game);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool GameExists(int id)
        //{
        //    return _context.Games.Any(e => e.Id == id);
        //}
    }
}
