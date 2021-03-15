using System;
using System.Collections.Generic;

namespace NBAapi.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int OrderTotal { get; set; }
        public DateTime OrderDate { get; set; }

        // navigation
        public int AccountId { get; set; }
        public Account Account { get; set; }
        public List<OrderLineItem> OrderLineItems { get; set; }
    }
}