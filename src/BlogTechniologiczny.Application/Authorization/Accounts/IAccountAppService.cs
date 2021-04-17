using System.Threading.Tasks;
using Abp.Application.Services;
using BlogTechniologiczny.Authorization.Accounts.Dto;

namespace BlogTechniologiczny.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
