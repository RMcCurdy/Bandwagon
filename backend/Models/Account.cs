using System;
using System.Collections.Generic;

namespace NBAapi.Models
{
    public class Account
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string ProfileImage { get; set; }
        public bool IsAdmin { get; set; }
        public int TotalPointsEarned { get; set; }
        public int TotalPointsSpent { get; set; }
        public int TotalPointsBalance { get; set; }
        public DateTime DateCreated { get; set; }

        // navigation properties
        public List<Badge> Badges { get; set; }
        public List<Order> Orders { get; set; }
        public List<Vote> Votes { get; set; }
        
    }
}