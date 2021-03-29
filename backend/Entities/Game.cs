using System;
using System.Collections.Generic;

namespace NBAapi.Entities
{
    public class Game
    {
        public int Id { get; set; }
        public int HomeTeamId { get; set; }
        public int VisitorTeamId { get; set; }
        public int HomePercent { get; set; }
        public int VisitorPercent { get; set; }
        public int HomePointsPayout { get; set; }
        public int VisitorPointsPayout { get; set; }
        public int HomeFinalScore { get; set; }
        public int VisitorFinalScore { get; set; }
        // schedule components
        public string GameTime { get; set; }
        public int GameDate { get; set; }
        // navigation
        public List<Vote> Votes { get; set; }
    }
}