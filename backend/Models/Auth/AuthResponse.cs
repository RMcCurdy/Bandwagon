using System;
using System.Collections.Generic;

namespace backend.Models.Auth
{
        public class AuthResponse
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string ProfilePic { get; set; }
        public DateTime DateCreated { get; set; }
        public int TotalPointsEarned { get; set; }
        public int TotalPointsSpent { get; set; }
        public int TotalPointsBalance { get; set; }
        public bool IsAdmin { get; set; }
        public bool Success { get; set; }
        public List<string> Errors { get; set; }
    }
}