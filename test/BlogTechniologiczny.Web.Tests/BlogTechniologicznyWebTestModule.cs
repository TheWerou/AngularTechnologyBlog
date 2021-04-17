using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using BlogTechniologiczny.EntityFrameworkCore;
using BlogTechniologiczny.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace BlogTechniologiczny.Web.Tests
{
    [DependsOn(
        typeof(BlogTechniologicznyWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class BlogTechniologicznyWebTestModule : AbpModule
    {
        public BlogTechniologicznyWebTestModule(BlogTechniologicznyEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(BlogTechniologicznyWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(BlogTechniologicznyWebMvcModule).Assembly);
        }
    }
}