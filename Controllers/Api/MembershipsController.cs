using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Web.Models;

namespace Web.Controllers.Api
{
    public class MembershipsController : ApiController
    {
        // GET api/memberships
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/memberships/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/memberships
        public void Post(dynamic model)
        {
            //this is a new user/role assignment
            using (var db = new ApplicationDbContext())
            {
                string roleId = model.membership.role;
                var role = db.Roles.FirstOrDefault(x => x.Id == roleId);
                string userId = model.membership.user;
                var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(db));

                manager.AddToRole(userId, role.Name);

                var note = new AspNetUserNote();
                note.EnteredBy = User.Identity.Name;
                note.Note = "Added user to " + role.Name + " role";

                var user = db.Users.FirstOrDefault(x => x.Id == userId);
                user.Notes.Add(note);
                db.SaveChanges();
            }
        }

        // PUT api/memberships/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/memberships/5
        public void Delete(string id)
        {
            //this is a bit hacky - but the association will be coming in here
            //and it's GUID | role
            //so parse that and unassign
            var splits = id.Split('|');
            var userId = splits[0];
            var roleId = splits[1];

            //this is a new user/role assignment
            using (var db = new ApplicationDbContext())
            {
                var role = db.Roles.FirstOrDefault(x => x.Id == roleId);
                var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(db));

                manager.RemoveFromRole(userId, role.Name);
                var note = new AspNetUserNote();
                note.EnteredBy = User.Identity.Name;
                note.Note = "Removed user from " + role.Name + " role";

                var user = db.Users.FirstOrDefault(x => x.Id == userId);
                user.Notes.Add(note);
                db.SaveChanges();


            }

        }
    }
}
