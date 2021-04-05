using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NBAapi.Data;
using NBAapi.Entities;

namespace NBAapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BadgesController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public BadgesController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/Badges
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Badge>>> GetBadges()
        {
            return await _context.Badges.ToListAsync();
        }

        // GET: api/Badges/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Badge>> GetBadge(int id)
        {
            var badgeToReturn = await _context.Badges.FindAsync(id);
            // var badges = await _context.Badges.ToListAsync();  /// Select Top  1 from tblABC ORDER BY BadgeId DESC 
            var badgeRow = await _context.AccountBadges
            .Where(a => a.AccountId == id)
            .OrderByDescending(o => o.BadgeId)
            .Take(1)
            .ToListAsync();
            // var badge = await _context.Badges.FindAsync(id);
            int highestBadgeId = badgeRow[0].BadgeId;  
            var badge = await _context.Badges.FindAsync(highestBadgeId);


            if (badge == null)
            {
                return NotFound();
            }

            return badge;
        }

        [HttpGet]
        [Route("have/{id}")]
        public async Task<IEnumerable<Badge>> GetBadgesHave(int id)
        {
            // var badgesToReturn = _context.AccountBadges.FindAsync(id);
            var haveBadgesToReturn = from b in _context.Badges
                        join ab in _context.AccountBadges on b.Id equals ab.BadgeId
                        where ab.AccountId == id 
                        select new Badge
                        {
                            Id = b.Id,
                            BadgeName = b.BadgeName,
                            BadgeImage = b.BadgeImage,
                            BadgeType = b.BadgeType,
                            BadgeDescription = b.BadgeDescription
                        };

            return await haveBadgesToReturn.ToListAsync();
        }

        // [HttpGet]
        // [Route("need/{id}")]
        // public async Task<IEnumerable<Badge>> GetBadgesNeed(int id)
        // {
        //     // var badgesToReturn = _context.AccountBadges.FindAsync(id);
        //     var haveBadgesToReturn = await (from b in _context.Badges
        //                 join ab in _context.AccountBadges on b.Id equals ab.BadgeId
        //                 where ab.AccountId == id 
        //                 select new Badge
        //                 {
        //                     Id = b.Id,
        //                     BadgeName = b.BadgeName,
        //                     BadgeImage = b.BadgeImage,
        //                     BadgeType = b.BadgeType,
        //                     BadgeDescription = b.BadgeDescription
        //                 }).ToListAsync();

        //     List<int> haveBIds = foreach (var haveRow in haveBadgesToReturn)
        //     {
        //         haveBIds.Add().where()
        //     }

        //     List<Badge> needBadges = [];
        //     foreach (var row in haveBadgesToReturn)
        //     {
        //         if(row.Id != )   
        //     }


           

            // return await haveBadgesToReturn.ToListAsync();
        //}

        // PUT: api/Badges/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBadge(int id, Badge badge)
        {
            if (id != badge.Id)
            {
                return BadRequest();
            }

            _context.Entry(badge).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BadgeExists(id))
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

        // POST: api/Badges
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Badge>> PostBadge(Badge badge)
        {
            _context.Badges.Add(badge);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBadge", new { id = badge.Id }, badge);
        }

        // DELETE: api/Badges/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBadge(int id)
        {
            var badge = await _context.Badges.FindAsync(id);
            if (badge == null)
            {
                return NotFound();
            }

            _context.Badges.Remove(badge);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BadgeExists(int id)
        {
            return _context.Badges.Any(e => e.Id == id);
        }
    }
}
