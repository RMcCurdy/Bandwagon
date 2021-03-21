using System.Collections.Generic;

namespace NBAapi.Entities
{
    public class Team
    {
        public int Id { get; set; }
        public string TeamName { get; set; }
        public string HomeCity { get; set; }
        public int OffensiveRating { get; set; }
        public int DefensiveRating { get; set; }

        // navigation
        public List<Player> Players { get; set; }
    }
}