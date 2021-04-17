using Abp.Application.Services;
using BlogTechniologiczny.MultiTenancy.Dto;

namespace BlogTechniologiczny.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

