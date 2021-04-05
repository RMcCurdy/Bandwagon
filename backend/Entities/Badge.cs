using System.Collections.Generic;

namespace NBAapi.Entities
{
    public class Badge
    {
        public int Id { get; set; }
        public string BadgeName { get; set; }
        public string BadgeImage { get; set; }
        public string BadgeType { get; set; }
        public string BadgeDescription { get; set; }
        
        // navigation
        public List<Account> Accounts { get; set; }
    }
}