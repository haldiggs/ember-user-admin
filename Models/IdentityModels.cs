using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using Microsoft.AspNet.Identity;

namespace Web.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.

    public class ApplicationUser : IdentityUser
    {

        public ApplicationUser()
        {
            this.Logs = new List<AspNetUserLog>();
            this.Notes = new List<AspNetUserNote>();
            this.Logs = new List<AspNetUserLog>();
            this.CreatedAt = DateTime.Now;
        }
        public string Email { get; set; }
        public string First { get; set; }
        public string Last { get; set; }
        public string Bio { get; set; }
        public string Twitter { get; set; }
        
        public DateTime CreatedAt { get; set; }
        public ICollection<AspNetUserLog> Logs { get; set; }
        public ICollection<AspNetUserNote> Notes { get; set; }

        public static dynamic GetSummarySet(string id=null, int limit = 50, string searchBy = ""){
            var context = new ApplicationDbContext();
            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));

            var users = new List<dynamic>();
            var roles = new List<dynamic>();
            var logs = new List<dynamic>();
            var notes = new List<dynamic>();
            var assignments = new List<dynamic>();


          var thingy = roleManager.Roles.ToList();
          foreach (var role in thingy)
            {
                roles.Add(new
                {
                    id = role.Id,
                    name = role.Name,
                    membership = new List<string>()
                });

            }

            foreach (var user in userManager.Users.Include("Notes").Include("Logs").ToList())
            {
                users.Add(new
                {
                    id = user.Id,
                    userName = user.UserName,
                    email = user.Email,
                    first = user.First,
                    last = user.Last,
                    bio = user.Bio,
                    twitter = user.Twitter,
                    notes = user.Notes.Select(x => x.ID).ToArray(),
                    logs = user.Logs.Select(x => x.ID).ToArray(),
                    membership = new List<string>(),
                    created_at = user.CreatedAt
                });

                //notes
                foreach (var note in user.Notes.OrderByDescending(x => x.CreatedAt))
                {
                    notes.Add(new
                    {
                        id = note.ID,
                        note = note.Note,
                        user = user.Id,
                        created_at = note.CreatedAt
                    });
                }

                //logs
                foreach (var log in user.Logs)
                {
                    logs.Add(new
                    {
                        id = log.ID,
                        entry = log.Entry,
                        user = user.Id,
                        created_at = log.CreatedAt
                    });
                }

                //assignments
                foreach (var r in user.Roles)
                {
                    var membershipId = user.Id + "|" + r.RoleId;
                    assignments.Add(new
                    {
                        id = membershipId,
                        user = user.Id,
                        role = r.RoleId
                    });
                    //update the roles output 
                    var roler = roles.First(x => x.id == r.RoleId);
                    roler.membership.Add(membershipId);
                    var userx = users.FirstOrDefault(x => x.id == user.Id);
                    userx.membership.Add(membershipId);
                }
            }

            return new { users = users, roles = roles,notes = notes, logs= logs, membership = assignments };
        }


    }
    public class AspNetUserNote
    {
        public AspNetUserNote()
        {
            this.CreatedAt = DateTime.Now;
        }
        
        [Key]
        public int ID { get; set; }
        public ApplicationUser User { get; set; }
        public string Note { get; set; }
        public string EnteredBy { get; set; }
        public DateTime CreatedAt { get; set; }
    }
    public class AspNetUserLog
    {
        public AspNetUserLog()
        {
            this.CreatedAt = DateTime.Now;
        }
        [Key]
        public int ID { get; set; }
        public ApplicationUser User { get; set; }
        public string Entry { get; set; }
        public DateTime CreatedAt { get; set; }
    }
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {

        public ApplicationDbContext()
            : base("DefaultConnection")
        {
        }
        public DbSet<AspNetUserLog> UserLogs { get; set; }
        public DbSet<AspNetUserNote> UserNotes { get; set; }
    }
}