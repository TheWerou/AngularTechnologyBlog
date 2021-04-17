using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using BlogTechniologiczny.Authorization;

namespace BlogTechniologiczny
{
    [DependsOn(
        typeof(BlogTechniologicznyCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class BlogTechniologicznyApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<BlogTechniologicznyAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(BlogTechniologicznyApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
