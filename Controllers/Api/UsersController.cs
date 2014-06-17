using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Web.Models;
using System.Data.Entity;

namespace Web.Controllers
{
    
    [Authorize(Roles="Administrator")]
    public class UsersController : ApiController
    {

        // GET api/users
        public dynamic Get(int limit=50, string q="")
        {
            return ApplicationUser.GetSummarySet(limit:limit,searchBy:q);
        }

        // GET api/users/5
        public dynamic Get(string id)
        {
            return ApplicationUser.GetSummarySet(id : id);
        }

        // POST api/users
        public void Post([FromBody]string value)
        {
        }
        
        // PUT api/users/5
        public dynamic Put(string id, dynamic model)
        {
            using (var db = new ApplicationDbContext())
            {
                var user = db.Users.FirstOrDefault(x => x.Id == id);
                //load it up!
                if (user != null)
                {
                    user.UserName = model.user.userName;
                    user.First = model.user.first;
                    user.Last = model.user.last;
                    user.Email = model.user.email;
                    user.Bio = model.user.bio;
                    user.Twitter = model.user.twitter;
                    
                    db.SaveChanges();
                }
            }
          //have to set the id here
            model.user.id = id;
            return model;

        }

        // DELETE api/users/5
        public void Delete(string id)
        {


        }
    }
}
