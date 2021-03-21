using Microsoft.EntityFrameworkCore;
using NBAapi.Entities;

namespace NBAapi.Data
{
    public class ApiDbContext : DbContext
    {
        public virtual DbSet<Account> Accounts { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderLineItem> OrderLineItems { get; set; }
        public virtual DbSet<Merchandise> Merchandises { get; set; }
        public virtual DbSet<Badge> Badges { get; set; }
        public virtual DbSet<Game> Games { get; set; }
        public virtual DbSet<Team> Teams { get; set; }
        public virtual DbSet<Player> Players { get; set; }
        public virtual DbSet<Vote> Votes { get; set; }

         public ApiDbContext(DbContextOptions<ApiDbContext> options)
            : base(options)
        {
            
        }
    }
}