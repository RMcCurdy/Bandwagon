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
    public class VotesController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public VotesController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/Votes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vote>>> GetVotes()
        {
            return await _context.Votes.ToListAsync();
        }

        // GET: api/Votes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vote>> GetVote(int id)
        {
            var vote = await _context.Votes.FindAsync(id);

            if (vote == null)
            {
                return NotFound();
            }

            return vote;
        }

        // PUT: api/Votes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVote(int id, Vote vote)
        {
            if (id != vote.Id)
            {
                return BadRequest();
            }

            _context.Entry(vote).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VoteExists(id))
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

        // POST: api/Votes
        [HttpPost]
        public async Task<ActionResult<VoteResponse>> PostVote(VoteRequest voteRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var userVote = await _context.Votes
                .Where(v => v.AccountId == voteRequest.AccountId && v.GameId == voteRequest.GameId)
                .FirstOrDefaultAsync();
                
            if (userVote == null)
            {
                // then this user has not voted on this game yet, so ADD a NEW vote
                var newVote = (new Vote()
                {
                    VotedForTeamId = voteRequest.VotedForTeamId,
                    PointsAwarded = 0,
                    AccountId = voteRequest.AccountId,
                    GameId = voteRequest.GameId
                });


                _context.Votes.Add(newVote);
                await _context.SaveChangesAsync();

                var newVoteResponse = (new VoteResponse()
                {
                    VotedForTeamId = newVote.VotedForTeamId
                });

                return newVoteResponse;
            }
            else
            {
                // else, this user HAS voted on this game, so UPDATE the user's vote
                // we know the userVote data
                userVote.VotedForTeamId = voteRequest.VotedForTeamId;
                var savedUserVote = await _context.SaveChangesAsync();

                var newVoteResponse = (new VoteResponse()
                {
                    VotedForTeamId = userVote.VotedForTeamId
                });

                return newVoteResponse;
            }
        }

        // DELETE: api/Votes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVote(int id)
        {
            var vote = await _context.Votes.FindAsync(id);
            if (vote == null)
            {
                return NotFound();
            }

            _context.Votes.Remove(vote);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VoteExists(int id)
        {
            return _context.Votes.Any(e => e.Id == id);
        }
    }
}
