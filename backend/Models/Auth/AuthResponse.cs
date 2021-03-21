using System.Collections.Generic;

namespace backend.Models.Auth
{
        public class AuthResponse
    {
        public string Firstname { get; set; }
        public string Username { get; set; }

        public bool Success { get; set; }
        public List<string> Errors { get; set; }
    }
}