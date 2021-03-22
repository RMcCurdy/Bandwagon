using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models.Auth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NBAapi.Data;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]  //api/auth  GET POST
    public class AuthController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public AuthController(ApiDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginRequest loginRequest) {
            if (!ModelState.IsValid)
            {
                return BadRequest(new AuthResponse()
                {
                    Firstname = null,
                    Username = null,
                    Errors = new List<string>() {
                                "Login information incorrect."
                            },
                    Success = false
                });
            }

            var user = await _context.Accounts.SingleOrDefaultAsync(u => u.Email == loginRequest.Email && u.Password == loginRequest.Password);
            
            if (user == null)
            {
                return BadRequest(new AuthResponse()
                {
                    Firstname = null,
                    Username = null,
                    Errors = new List<string>() {
                                "Login information incorrect."
                            },
                    Success = false
                });
            }

            var response = new AuthResponse() {
                Firstname = user.Firstname,
                Username = user.Username,
                Errors = new List<string>() {
                            ""
                        },
                Success = true
            };

            return Ok(response);

        }

    }
}