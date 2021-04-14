using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Entities;
using backend.Models;
using backend.Models.Auth;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NBAapi.Data;
using NBAapi.Entities;


namespace NBAapi.Controllers
{
    [Route("api/[controller]")] // api/accounts
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public AccountsController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/Accounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Account>>> GetAccounts()
        {
            return await _context.Accounts.ToListAsync();
        }

        // GET: api/Accounts/5
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

        // PUT: api/Accounts/5
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

        // [HttpGet]
        // [Route("test")] //api/accounts/profile
        // public string test()
        // {
        //     return "success";
        // }


        // POST: api/Accounts
        // To protect from overposting attacks, from https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("profile")] //api/accounts/profile
        public async Task<IActionResult> PostAccount(ProfileRequest profileRequest)
        {
            var account = await _context.Accounts.FindAsync(profileRequest.Id);
            if (account == null)
            {
                return BadRequest();
            }

            account.FirstName = profileRequest.FirstName;
            account.LastName = profileRequest.LastName;
            account.Email = profileRequest.Email;
            account.Username = profileRequest.Username;
            account.ProfilePic = profileRequest.ProfilePic;

            await _context.SaveChangesAsync();

            return Ok();
        }

        // =================================================================================================
        [HttpPost]
        [Route("signup")] //api/accounts/signup
        public async Task<IActionResult> SignUp(SignUpRequest signUpRequest)
        {
            var newAccount = (new Account()
            {
                FirstName = signUpRequest.FirstName,
                LastName = signUpRequest.LastName,
                Username = signUpRequest.Username,
                Email = signUpRequest.Email,
                Password = signUpRequest.Password,
                ProfilePic = signUpRequest.ProfilePic,

                DateCreated = DateTime.Now,
                TotalPointsEarned = 0,
                TotalPointsSpent = 0,
                TotalPointsBalance = 0,
                IsAdmin = false,

            });

            await _context.Accounts.AddAsync(newAccount);
            await _context.SaveChangesAsync();
           
             // create new starter badge 11 for this new user (in the many-to-many table)
            await _context.AccountBadges.AddAsync(new AccountBadge()
            {
                AccountId = newAccount.Id,
                BadgeId = 11,
            });
            await _context.SaveChangesAsync();

            var response = new AuthResponse()
            {
                Id = newAccount.Id,
                FirstName = newAccount.FirstName,
                LastName = newAccount.LastName,
                Username = newAccount.Username,
                Email = newAccount.Email,
                ProfilePic = newAccount.ProfilePic,
                DateCreated = newAccount.DateCreated,
                TotalPointsEarned = newAccount.TotalPointsEarned,
                TotalPointsSpent = newAccount.TotalPointsSpent,
                TotalPointsBalance = newAccount.TotalPointsBalance,
                IsAdmin = newAccount.IsAdmin,

                Errors = new List<string>() {
                            ""
                        },
                Success = true
            };

            return Ok(response);
        }

        // DELETE: api/Accounts/5
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
