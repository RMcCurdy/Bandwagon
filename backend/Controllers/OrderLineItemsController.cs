using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NBAapi.Data;
using NBAapi.Entities;

namespace NBAapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderLineItemsController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public OrderLineItemsController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/OrderLineItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderLineItem>>> GetOrderLineItems()
        {
            return await _context.OrderLineItems.ToListAsync();
        }

        // GET: api/OrderLineItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderLineItem>> GetOrderLineItem(int id)
        {
            var orderLineItem = await _context.OrderLineItems.FindAsync(id);

            if (orderLineItem == null)
            {
                return NotFound();
            }

            return orderLineItem;
        }

        // PUT: api/OrderLineItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderLineItem(int id, OrderLineItem orderLineItem)
        {
            if (id != orderLineItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(orderLineItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderLineItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/OrderLineItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<OrderResponse>> PostOrderLineItem(OrderRequest orderRequest)
        {
            var newOrder = (new Order()
                {
                    OrderDate = DateTime.Now,
                    OrderTotal = 0,
                    AccountId = orderRequest.AccountId
                });

            _context.Orders.Add(newOrder);
            await _context.SaveChangesAsync();

            var newOrderId = newOrder.Id;

            var newOrderItem = (new OrderLineItem()
                {
                    ItemName = orderRequest.ItemName,
                    Price = orderRequest.Price,
                    Quantity = orderRequest.Quantity,
                    Subtotal = orderRequest.Subtotal,
                    MerchandiseIdRef = orderRequest.MerchandiseIdRef,
                    OrderId = newOrderId
                });

            _context.OrderLineItems.Add(newOrderItem);
            await _context.SaveChangesAsync();

            newOrder.OrderTotal = newOrderItem.Price;            
            await _context.SaveChangesAsync();

            // return CreatedAtAction("OrderCreated", new { id = newOrderId });

            var orderResponse = (new OrderResponse()
            {
                OrderId = newOrderId,
                OrderTotal = newOrder.OrderTotal
            });

            return orderResponse;
        }

        // DELETE: api/OrderLineItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderLineItem(int id)
        {
            var orderLineItem = await _context.OrderLineItems.FindAsync(id);
            if (orderLineItem == null)
            {
                return NotFound();
            }

            _context.OrderLineItems.Remove(orderLineItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrderLineItemExists(int id)
        {
            return _context.OrderLineItems.Any(e => e.Id == id);
        }
    }
}
