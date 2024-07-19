using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RunJournal.Data;
using RunJournal.Entities;
namespace RunJournal.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class UserController : ControllerBase
    {

        private readonly DataContext _context;

        public UserController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            var users = await _context.Users.ToListAsync();

            return Ok(users);
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User newUser)
        {
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();
                
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<User>>> UpdateUser(User updatedUser)
        {
            var dbUser = await _context.Users.FindAsync(updatedUser.Id);
            if (dbUser is null)
            {
                return NotFound("User not found.");
            }
            dbUser.UserUID = updatedUser.UserUID;
            dbUser.goal = updatedUser.goal;
            
            await _context.SaveChangesAsync();

     

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<User>>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user is null)
            {
                return NotFound("User not found.");
            }
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserById(int id)
        {

            var users = await _context.Users
                                    .Where(user => user.Id == id)
                                    .FirstOrDefaultAsync();
            return Ok(users);
        }


        [HttpGet("user{uid}")]
        public async Task<ActionResult<User>> GetUserByUID(string uid)
        {

            var user = await _context.Users
                                    .Where(user => user.UserUID == uid)
                                    .FirstOrDefaultAsync();
            return Ok(user);
        }

        
        
       


    }
}
