using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using BlogTechniologiczny.Configuration;

namespace BlogTechniologiczny.Web.Host.Startup
{
    [DependsOn(
       typeof(BlogTechniologicznyWebCoreModule))]
    public class BlogTechniologicznyWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public BlogTechniologicznyWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(BlogTechniologicznyWebHostModule).GetAssembly());
        }
    }
}
