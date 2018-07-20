using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace dotnetcore_sample.Controllers
{
    public class DroneController : Controller
    {
        public IActionResult DroneInfo()
        {
            return View();
        }

		public IActionResult DroneBuild()
		{
			return View();
		}
	}
}