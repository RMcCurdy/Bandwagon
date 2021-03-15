using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NBAapi.Data;
using NBAapi.Models;

namespace NBAapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MerchandisesController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public MerchandisesController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/Merchandises
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Merchandise>>> GetMerchandises()
        {
            return await _context.Merchandises.ToListAsync();
        }

        // GET: api/Merchandises/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Merchandise>> GetMerchandise(int id)
        {
            var merchandise = await _context.Merchandises.FindAsync(id);

            if (merchandise == null)
            {
                return NotFound();
            }

            return merchandise;
        }

        // PUT: api/Merchandises/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMerchandise(int id, Merchandise merchandise)
        {
            if (id != merchandise.Id)
            {
                return BadRequest();
            }

            _context.Entry(merchandise).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MerchandiseExists(id))
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

        // POST: api/Merchandises
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Merchandise>> PostMerchandise(Merchandise merchandise)
        {
            _context.Merchandises.Add(merchandise);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMerchandise", new { id = merchandise.Id }, merchandise);
        }

        // DELETE: api/Merchandises/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMerchandise(int id)
        {
            var merchandise = await _context.Merchandises.FindAsync(id);
            if (merchandise == null)
            {
                return NotFound();
            }

            _context.Merchandises.Remove(merchandise);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MerchandiseExists(int id)
        {
            return _context.Merchandises.Any(e => e.Id == id);
        }
    }
}
