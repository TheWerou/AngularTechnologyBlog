using System.Threading.Tasks;
using BlogTechniologiczny.Configuration.Dto;

namespace BlogTechniologiczny.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
