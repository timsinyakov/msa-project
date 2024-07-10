using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using msarun.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace msarun.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RunController : ControllerBase
    {


        private readonly Msa1Context _context;

        public RunController(Msa1Context context)
        {
            _context = context;
        }

        // GET: api/run
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Run>>> GetAllRuns()
        {
            var runs = await _context.Runs.ToListAsync();
            return Ok(runs);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Run>> GetRunById(int id)
        {
            var run = await _context.Runs.FindAsync(id);

            if (run == null)
            {
                return NotFound();
            }

            return Ok(run);
        }

       

        
    }
}