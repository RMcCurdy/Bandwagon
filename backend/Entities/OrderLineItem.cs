namespace NBAapi.Entities
{
    public class OrderLineItem
    {
        public int Id { get; set; }
        public string ItemName { get; set; }
        public int Price { get; set; }

        // unique
        public int Quantity { get; set; }
        public int Subtotal { get; set; }
        public int MerchandiseId { get; set; }

        // navigation
        // public int MerchandiseId { get; set; }
        // public Merchandise Merchandise { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
    }
}