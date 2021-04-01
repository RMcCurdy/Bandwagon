using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
// may need to remove this using below
using backend.Models.Auth;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NBAapi.Data;
using NBAapi.Entities;

namespace NBAapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaderboardController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public LeaderboardController(ApiDbContext context)
        {
            _context = context;
        }

         // GET: api/Leaderboard
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LeaderboardResponse>>> GetLeaderboardData()
        {
            // return await _context.Accounts.ToListAsync();
            return await _context.Accounts
            .Where(u => u.IsAdmin != true)
            .OrderByDescending(pts => pts.TotalPointsBalance)
            .Select(u => new LeaderboardResponse
            {
                Id = u.Id,
                Username = u.Username,
                TotalPointsEarned = u.TotalPointsEarned,
                ProfilePic = u.ProfilePic
            })
            .ToListAsync();
        }

        // GET: api/Leaderboard/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Account>> GetAccount(int id)
        {
            var account = await _context.Accounts.FindAsync(id);

            if (account == null)
            {
                return NotFound();
            }

            return account;
        }

        // PUT: api/Leaderboard/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccount(int id, Account account)
        {
            if (id != account.Id)
            {
                return BadRequest();
            }

            _context.Entry(account).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountExists(id))
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

        // POST: api/Leaderboard
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Account>> PostAccount(Account account)
        {
            _context.Accounts.Add(account);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAccount", new { id = account.Id }, account);
        }

        // DELETE: api/Leaderboard/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccount(int id)
        {
            var account = await _context.Accounts.FindAsync(id);
            if (account == null)
            {
                return NotFound();
            }

            _context.Accounts.Remove(account);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccountExists(int id)
        {
            return _context.Accounts.Any(e => e.Id == id);
        }
    }
}
