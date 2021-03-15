using System.Collections.Generic;

namespace NBAapi.Models
{
    public class Badge
    {
        public int Id { get; set; }
        public string BadgeName { get; set; }
        public string BadgeImage { get; set; }
        public string BadgeType { get; set; }
        
        // navigation
        public List<Account> Accounts { get; set; }
    }
}