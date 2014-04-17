using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Web.Models;

namespace Web.Controllers.Api
{
    public class NotesController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public dynamic Post([FromBody]dynamic model)
        {
            using (var db = new ApplicationDbContext())
            {
                string id = model.note.user;
                var user = db.Users.FirstOrDefault(x => x.Id == id);
                var note = new AspNetUserNote();
                note.CreatedAt = DateTime.Now;
                note.EnteredBy = User.Identity.Name;
                note.Note = model.note.note;
                user.Notes.Add(note);
                db.SaveChanges();
            }

            return model;
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}