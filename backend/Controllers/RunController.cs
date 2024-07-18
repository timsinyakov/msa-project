using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RunJournal.Data;
using RunJournal.Entities;
namespace RunJournal.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class RunController : ControllerBase
    {

        private readonly DataContext _context;

        public RunController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Run>>> GetAllRuns()
        {
            var runs = await _context.Runs.ToListAsync();

            return Ok(runs);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Run>> GetRun(int id)
        {
            var run = await _context.Runs.FindAsync(id);
            

            return Ok(run);
        }

        [HttpPost]
        public async Task<ActionResult<List<Run>>> AddRun(Run newRun)
        {
            _context.Runs.Add(newRun);
            await _context.SaveChangesAsync();
                
            return Ok(await _context.Runs.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Run>>> UpdateRun(Run updatedRun)
        {
            var dbRun = await _context.Runs.FindAsync(updatedRun.Id);
            if (dbRun is null)
            {
                return NotFound("Run not found.");
            }
            dbRun.Time = updatedRun.Time;
            dbRun.Enjoyment = updatedRun.Enjoyment;
            dbRun.Difficulty = updatedRun.Difficulty;
            dbRun.Pain = updatedRun.Pain;
            dbRun.Effort = updatedRun.Effort;
            dbRun.Note = updatedRun.Note;

            await _context.SaveChangesAsync();

     

            return Ok(await _context.Runs.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<Run>>> DeleteRun(int id)
        {
            var run = await _context.Runs.FindAsync(id);
            if (run is null)
            {
                return NotFound("Run not found.");
            }
            _context.Runs.Remove(run);
            await _context.SaveChangesAsync();

            return Ok(await _context.Runs.ToListAsync());
        }

        [HttpGet("user{id}")]
        public async Task<ActionResult<List<Run>>> GetRunsByUser(int id)
        {

            var runs = await _context.Runs
                                    .Where(run => run.UserId == id)
                                    .ToListAsync(); 

            return Ok(runs);
        }

        



    }
}
