namespace backend.Models
{
    public class GameVoteResponse
    {
        public int GameId { get; set; }
        public int VoteId { get; set; }
        public int AccountId { get; set; }
        public int VotedForTeamId { get; set; }
        public int PointsAwarded { get; set; }

        public int HomeFinalScore { get; set; }
        public int VisitorFinalScore { get; set; }
        public int HomePointsPayout { get; set; }
        public int VisitorPointsPayout { get; set; }
        public int HomeTeamId { get; set; }
        public int VisitorTeamId { get; set; }

    }



}