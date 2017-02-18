using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Iclart.WebApp.Startup))]
namespace Iclart.WebApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
