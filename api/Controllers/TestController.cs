using System;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        // GET api/test
        [HttpGet]
        public IActionResult Get()
        {
            var time = DateTime.Now;
            var result = new [] {
                new { Prop1 = "Time", Prop2 = time.ToString() },
                new { Prop1 = "Apple", Prop2 = "Seed" }
            }; 

            return Ok(result);
        }
    }
}