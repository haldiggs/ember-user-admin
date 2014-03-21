using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Web.Models;
using System.Linq;
using Newtonsoft.Json;

namespace Web.Controllers
{

    [Authorize(Roles="admin")]  
    public class UsersController : ApiController
    {
        
        // GET api/users
        public dynamic Get()
        {
            var db = new ApplicationDbContext();
            var users = db.Users;
            var result = new List<dynamic>();
            var roles = new List<dynamic>();
            var indexer = 1;
            foreach (var user in users)
            {
                result.Add(new
                {
                    id = indexer,
                    userName = user.UserName,
                    email = user.Email,
                    first = user.First,
                    last = user.Last,
                    bio = user.Bio,
                    twitter = user.Twitter,
                    roles = user.Roles.Select(x => int.Parse(x.RoleId)).ToArray()
                });
                indexer++;

            }
            foreach (var role in db.Roles)
            {
                roles.Add(new { id = int.Parse(role.Id), name = role.Name });
            }
            var output = new {users = result, roles = roles};
            return output;

        }

        // GET api/users/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/users
        public void Post([FromBody]string value)
        {
        }

        // PUT api/users/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/users/5
        public void Delete(int id)
        {
        }
    }
}
