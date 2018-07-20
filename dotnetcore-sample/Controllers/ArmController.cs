using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace dotnetcore_sample.Controllers
{
    public class ArmController : Controller
    {
        public IActionResult ArmInfo()
        {
            return View();
        }

		public IActionResult ArmBuild()
		{
			return View();
		}

		public IActionResult ArmResults()
		{
			return View();
		}

	}
}