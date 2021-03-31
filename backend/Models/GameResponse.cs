namespace backend.Models
{
    public class GameResponse
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
        // properties to be used
        public string HomeTeamName { get; set; }
        public string VisitorTeamName { get; set; }
    }
}