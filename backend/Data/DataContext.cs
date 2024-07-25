using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RunJournal.Entities;
namespace RunJournal.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Run> Runs { get; set; }

        public DbSet<User> Users { get; set; }

        public override int SaveChanges()
        {
            var entries = ChangeTracker.Entries<Run>()
                .Where(e => e.State == EntityState.Added);

            foreach (var entry in entries)
            {
                entry.Entity.Date = DateTime.Now;
            }

            return base.SaveChanges();
        }
    }
}
