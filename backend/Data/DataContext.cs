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
    }
}
