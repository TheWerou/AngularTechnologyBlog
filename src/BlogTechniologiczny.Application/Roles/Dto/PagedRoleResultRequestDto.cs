using Abp.Application.Services.Dto;

namespace BlogTechniologiczny.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

