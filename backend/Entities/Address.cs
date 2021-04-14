using NBAapi.Entities;

namespace backend.Entities
{
    public class Address
    {
        public int Id { get; set; }
        public string StreetAddress { get; set; }
        public int AccountId { get; set; }
        public Account Account { get; set; }
    }
}