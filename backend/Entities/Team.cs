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
        public int HomeFieldGoalPercent { get; set; }
        public int AwayFieldGoalPercent { get; set; }
        public int HomeThreePointPercent { get; set; }
        public int AwayThreePointPercent { get; set; }

        // navigation
        public List<Player> Players { get; set; }
    }
}