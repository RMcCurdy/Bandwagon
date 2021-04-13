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
//          Id = g.Id,
//  HomeTeamId = g.HomeTeamId,
//  VisitorTeamId = g.VisitorTeamId,
//  HomePercent = g.HomePercent,
//  VisitorPercent = g.VisitorPercent,
//  HomePointsPayout = g.HomePointsPayout,
//  VisitorPointsPayout = g.VisitorPointsPayout,
//  HomeFinalScore = g.HomeFinalScore,
//  VisitorFinalScore = g.VisitorFinalScore,
//  GameTime = g.GameTime,
//  GameDate = g.GameDate,
//  HomeTeamName = tnhome.TeamName,
//  VisitorTeamName = tnvis.TeamName,
//  VotedAccountId = accountId,
//  VotedForTeamId = 0