﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RunJournal.Data;
using RunJournal.Entities;
using Microsoft.Extensions.Logging;

namespace RunJournal.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class RunController : ControllerBase
    {

        private readonly DataContext _context;
        private readonly ILogger<RunController> _logger;


        public RunController(DataContext context, ILogger<RunController> logger)
        {
            _context = context;
            _logger = logger;
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
            if (newRun == null)
            {
                return BadRequest("Run data is required.");
            }

            // Ensure the Date property is set
            if (newRun.Date == DateTime.MinValue)
            {
                newRun.Date = DateTime.UtcNow;
            }

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
                return NotFound("User not found.");
            }
            _logger.LogInformation("Updating run with ID {Id}", dbRun.Id);

            dbRun.Time = updatedRun.Time;
            dbRun.Enjoyment = updatedRun.Enjoyment;
            dbRun.Difficulty = updatedRun.Difficulty;
            dbRun.Pain = updatedRun.Pain;
            dbRun.Effort = updatedRun.Effort;
            dbRun.Note = updatedRun.Note;
            dbRun.Distance = updatedRun.Distance;
            dbRun.Date = updatedRun.Date;
            dbRun.UserUID = updatedRun.UserUID;


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

        [HttpGet("user{uid}")]
        public async Task<ActionResult<List<Run>>> GetRunsByUser(string uid)
        {

            var runs = await _context.Runs
                                    .Where(run => run.UserUID == uid)
                                    .ToListAsync(); 

            return Ok(runs);
        }

        



    }
}
