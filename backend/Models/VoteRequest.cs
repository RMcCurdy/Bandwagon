namespace backend.Models
{
    public class VoteRequest
    {
        public int GameId { get; set; }
        public int AccountId { get; set; }
        public int VotedForTeamId { get; set; }
    }
}