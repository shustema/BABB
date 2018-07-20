using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace dotnetcore_sample.Controllers
{
    public class AutoVehicleController : Controller
    {
        public IActionResult AutoVehicleInfo()
        {
            return View();
        }

		public IActionResult AutoVehicleBuild()
		{
			return View();
		}
	}
}