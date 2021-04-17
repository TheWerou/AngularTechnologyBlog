using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using BlogTechniologiczny.Configuration.Dto;

namespace BlogTechniologiczny.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : BlogTechniologicznyAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
