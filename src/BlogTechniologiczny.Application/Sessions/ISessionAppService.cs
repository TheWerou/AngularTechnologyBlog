using System.Threading.Tasks;
using Abp.Application.Services;
using BlogTechniologiczny.Sessions.Dto;

namespace BlogTechniologiczny.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
