using Abp.Authorization;
using BlogTechniologiczny.Authorization.Roles;
using BlogTechniologiczny.Authorization.Users;

namespace BlogTechniologiczny.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
