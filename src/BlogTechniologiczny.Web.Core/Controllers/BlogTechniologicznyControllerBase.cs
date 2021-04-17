using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace BlogTechniologiczny.Controllers
{
    public abstract class BlogTechniologicznyControllerBase: AbpController
    {
        protected BlogTechniologicznyControllerBase()
        {
            LocalizationSourceName = BlogTechniologicznyConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
