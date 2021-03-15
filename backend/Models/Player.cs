namespace NBAapi.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Points { get; set; }
        public int Assists { get; set; }
        public int Rebounds { get; set; }
        public bool IsInjured { get; set; }

        // navigation
        public int TeamId { get; set; }
        public Team Team { get; set; }
    }
}