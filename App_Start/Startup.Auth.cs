using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Owin;
using System.Configuration;
using System.Threading.Tasks;
using Web.Models;

namespace Web
{
    public partial class Startup
    {
        // For more information on configuring authentication, please visit http://go.microsoft.com/fwlink/?LinkId=301864
        public void ConfigureAuth(IAppBuilder app)
        {
            // Enable the application to use a cookie to store information for the signed in user
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                LoginPath = new PathString("/Account/Login")
            });
            // Use a cookie to temporarily store information about a user logging in with a third party login provider
            app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);

            // Uncomment the following lines to enable logging in with third party login providers
            //app.UseMicrosoftAccountAuthentication(
            //    clientId: "",
            //    clientSecret: "");

            //app.UseTwitterAuthentication(
            //   consumerKey: "",
            //   consumerSecret: "");

            //app.UseFacebookAuthentication(
            //   appId: "",
            //   appSecret: "");

            app.UseGoogleAuthentication();
            using (var context = new ApplicationDbContext())
            {
              context.Database.Delete();
              context.Database.Create();

            }

            CreateAdminUser().Wait();
        }
      
        private const string RoleName = "Administrator";

        private async Task CreateAdminUser()
        {
          var username = "admin";//ConfigurationManager.AppSettings["DefaultAdminUsername"];
          var password = "password123";//ConfigurationManager.AppSettings["DefaultAdminPassword"];

          using (var context = new ApplicationDbContext())
          {
            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));

            var role = new IdentityRole(RoleName);

            var result = await roleManager.RoleExistsAsync(RoleName);
            if (!result)
            {
              await roleManager.CreateAsync(role);
            }

            var user = await userManager.FindByNameAsync(username);
            if (user == null)
            {
              user = new ApplicationUser { UserName = username, Email = "admin@example.com", First = "Big", Last="Admin Person" };
              await userManager.CreateAsync(user, password);
              await userManager.AddToRoleAsync(user.Id, RoleName);
            }
          }
        }

    }
}