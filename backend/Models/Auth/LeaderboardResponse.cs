namespace backend.Models.Auth
{
    public class LeaderboardResponse
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public int TotalPointsEarned { get; set; }
        public string ProfilePic { get; set; }
    }
}