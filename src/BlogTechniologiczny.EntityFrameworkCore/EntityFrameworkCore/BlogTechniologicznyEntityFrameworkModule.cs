using Abp.EntityFrameworkCore.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Zero.EntityFrameworkCore;
using BlogTechniologiczny.EntityFrameworkCore.Seed;

namespace BlogTechniologiczny.EntityFrameworkCore
{
    [DependsOn(
        typeof(BlogTechniologicznyCoreModule), 
        typeof(AbpZeroCoreEntityFrameworkCoreModule))]
    public class BlogTechniologicznyEntityFrameworkModule : AbpModule
    {
        /* Used it tests to skip dbcontext registration, in order to use in-memory database of EF Core */
        public bool SkipDbContextRegistration { get; set; }

        public bool SkipDbSeed { get; set; }

        public override void PreInitialize()
        {
            if (!SkipDbContextRegistration)
            {
                Configuration.Modules.AbpEfCore().AddDbContext<BlogTechniologicznyDbContext>(options =>
                {
                    if (options.ExistingConnection != null)
                    {
                        BlogTechniologicznyDbContextConfigurer.Configure(options.DbContextOptions, options.ExistingConnection);
                    }
                    else
                    {
                        BlogTechniologicznyDbContextConfigurer.Configure(options.DbContextOptions, options.ConnectionString);
                    }
                });
            }
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(BlogTechniologicznyEntityFrameworkModule).GetAssembly());
        }

        public override void PostInitialize()
        {
            if (!SkipDbSeed)
            {
                SeedHelper.SeedHostDb(IocManager);
            }
        }
    }
}
