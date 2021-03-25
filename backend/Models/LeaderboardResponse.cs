namespace backend.Models
{
    public class LeaderboardResponse
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public int PointsEarned { get; set; }
        public string ProfilePic { get; set; }
    }
}