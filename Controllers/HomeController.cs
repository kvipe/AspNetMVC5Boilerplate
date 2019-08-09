using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace empty_mvc.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ViewResult Index()
        {
            return View("Index/Index"); // search in Views/ContrName/ActionName/ActionName.cshtml
        }

        public ViewResult News()
        {
            ViewBag.newsCount = 57;
            return View("News/News");
        }
    }
}