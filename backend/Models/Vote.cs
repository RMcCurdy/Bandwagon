namespace NBAapi.Models
{
    public class Vote
    {
        public int Id { get; set; }
        public int VotedForTeamId { get; set; }
        public int PointsAwarded { get; set; }

        // navigation
        public int AccountId { get; set; }
        public Account Account { get; set; }
        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}