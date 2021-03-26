using System.Collections.Generic;

namespace NBAapi.Entities
{
    public class Team
    {
        public int Id { get; set; }
        public string TeamName { get; set; }
        public string HomeCity { get; set; }
        public int HomePoints { get; set; }
        public int AwayPoints { get; set; }
        public int FieldGoalPercent { get; set; }
        public int ThreePointPercent { get; set; }

        // navigation
        public List<Player> Players { get; set; }
    }
}