namespace backend.Models
{
    public class OrderRequest
    {
        public string ItemName { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
        public int Subtotal { get; set; }
        public int MerchandiseId { get; set; }
        public int AccountId { get; set; }
    }
}