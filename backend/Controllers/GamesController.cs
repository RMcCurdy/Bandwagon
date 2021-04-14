using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NBAapi.Data;
using NBAapi.Entities;

namespace NBAapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public GamesController(ApiDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GameDates")]  //api/games/gamedates
        public List<GameDateResponse> GameDates()
        {
            var gamedates = from g in _context.Games
                            select new GameDateResponse
                            {
                                GameDate = g.GameDate
                            };

            return gamedates.Distinct().OrderBy(g => g.GameDate).ToList();
        }


        // back to api/games/15
        [HttpGet("{gameDateInt}/{accountId}")]

        public async Task<IEnumerable<GameResponse>> GetGames2(int gameDateInt, int accountId)
        {
            // get games for this game date // eg get games for april 15
            var gamesTeams = from g in _context.Games
                             join tnhome in _context.Teams on g.HomeTeamId equals tnhome.Id
                             join tnvis in _context.Teams on g.VisitorTeamId equals tnvis.Id
                             where (g.GameDate == gameDateInt)
                             select new GameResponse
                             {
                                 Id = g.Id,
                                 HomeTeamId = g.HomeTeamId,
                                 VisitorTeamId = g.VisitorTeamId,
                                 HomePercent = g.HomePercent,
                                 VisitorPercent = g.VisitorPercent,
                                 HomePointsPayout = g.HomePointsPayout,
                                 VisitorPointsPayout = g.VisitorPointsPayout,
                                 HomeFinalScore = g.HomeFinalScore,
                                 VisitorFinalScore = g.VisitorFinalScore,
                                 GameTime = g.GameTime,
                                 GameDate = g.GameDate,
                                 HomeTeamName = tnhome.TeamName,
                                 VisitorTeamName = tnvis.TeamName,
                                 VotedAccountId = accountId,
                                 VotedForTeamId = 0
                             };

            var gameCount = gamesTeams.Count();

            // from https://stackoverflow.com/questions/5765785/add-elements-to-object-array/34724136
            // List<Subject> subjects = new List<Subject>();
            // subjects.add(new Subject{....});
            List<GameResponse> gameResponseLoop = new List<GameResponse>();
            foreach (var g in gamesTeams)
            {
                // get the vote for this game from this user, if it exists (get 0 if not exist)
                var returnedVotedForTeamId = await GetUserVoteForGame(g.Id, accountId);

                gameResponseLoop.Add(new GameResponse
                {
                    Id = g.Id,
                    HomeTeamId = g.HomeTeamId,
                    VisitorTeamId = g.VisitorTeamId,
                    HomePercent = g.HomePercent,
                    VisitorPercent = g.VisitorPercent,
                    HomePointsPayout = g.HomePointsPayout,
                    VisitorPointsPayout = g.VisitorPointsPayout,
                    HomeFinalScore = g.HomeFinalScore,
                    VisitorFinalScore = g.VisitorFinalScore,
                    GameTime = g.GameTime,
                    GameDate = g.GameDate,
                    HomeTeamName = g.HomeTeamName,
                    VisitorTeamName = g.VisitorTeamName,
                    VotedAccountId = accountId,
                    VotedForTeamId = returnedVotedForTeamId
                });
            }

            var gameResponseLoopCount = gameResponseLoop.Count();

            var gamesResp = gameResponseLoop;

            return gamesResp;
        }
        private async Task<int> GetUserVoteForGame(int gameId, int accountId)
        {
            var vote = await _context.Votes.Where(v => v.GameId == gameId && v.AccountId == accountId).FirstOrDefaultAsync();
            if (vote == null)
            {
                // VotedForTeamId = 0
                return 0;
            }
            else
            {
                // VotedForTeamId = 0
                return vote.VotedForTeamId;
            }
        }

        // PUT: api/Games/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGame(int id, Game game)
        {
            if (id != game.Id)
            {
                return BadRequest();
            }

            _context.Entry(game).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Games
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost] //post a single game
        public async Task<ActionResult<Game>> PostGame(Game game)
        {
            _context.Games.Add(game);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGame", new { id = game.Id }, game);
        }

        [HttpPost] //post a single game
        [Route("savescores")]
        public async Task<string> PostGameScores(List<Game> gamesList)  //public async Task<IEnumerable<GameResponse>> GetGames2(int gameDateInt, int accountId)
        {

            foreach (var g in gamesList)
            {

                var game = await _context.Games.FindAsync(g.Id);
                if (game != null)
                {
                    game.HomeFinalScore = g.HomeFinalScore;
                    game.VisitorFinalScore = g.VisitorFinalScore;

                    _context.Games.Update(game);
                }
            }
            await _context.SaveChangesAsync();

            return "successfully saved scores";
        }



        // DELETE: api/Games/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGame(int id)
        {
            var game = await _context.Games.FindAsync(id);
            if (game == null)
            {
                return NotFound();
            }

            _context.Games.Remove(game);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GameExists(int id)
        {
            return _context.Games.Any(e => e.Id == id);
        }
    }
}
