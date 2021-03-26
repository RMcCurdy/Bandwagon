namespace NBAapi.Entities
{
    public class Player
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Points { get; set; }

        // navigation
        public int TeamId { get; set; }
        public Team Team { get; set; }
    }
}