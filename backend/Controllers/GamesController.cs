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

        // // GET: api/Games
        // [HttpGet]
        // // public async Task<ActionResult<IEnumerable<GameResponse>>> GetGames()
        // public async Task<ActionResult<Game>> GetGame()
        // {
        //     // // var game = await _context.Games.FindAsync(id);
        //     // var game = await _context.Games.ToListAsync();

        //     // if (game == null)
        //     // {
        //     //     return NotFound();
        //     // }

        //     // return game;
        // }






        [HttpGet]
        [Route("GameDates")]  //api/games/gamedates
        public List<GameDateResponse> GameDates()
        {
            var gamedates = from g in _context.Games
                        select new GameDateResponse
                        {
                            GameDate = g.GameDate
                        };

            return gamedates.Distinct().ToList();
        }









        // GET: api/Games/15
        [HttpGet("{id}")]
       
         public async Task<IEnumerable<GameResponse>> GetGames(int id)
        {
            var games = from g in _context.Games
                        join tnhome in _context.Teams on g.HomeTeamId equals tnhome.Id
                        join tnvis in _context.Teams on g.VisitorTeamId equals tnvis.Id
                        where g.GameDate == id 
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
                            VisitorTeamName = tnvis.TeamName
                        };

            return await games.ToListAsync();
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
        [HttpPost]
        public async Task<ActionResult<Game>> PostGame(Game game)
        {
            _context.Games.Add(game);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGame", new { id = game.Id }, game);
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
