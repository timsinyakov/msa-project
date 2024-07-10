using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using msarun.Models;

namespace msarun.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly Msa1Context _context;

        public UserController(Msa1Context context)
        {
            _context = context;
        }

        // GET: api/user
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }

        
    }
}
