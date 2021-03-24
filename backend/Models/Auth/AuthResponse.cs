using System.Collections.Generic;

namespace backend.Models.Auth
{
        public class AuthResponse
    {
        public string FirstName { get; set; }
        public string Username { get; set; }
        public string ProfilePic { get; set; }
        public bool Success { get; set; }
        public List<string> Errors { get; set; }
    }
}