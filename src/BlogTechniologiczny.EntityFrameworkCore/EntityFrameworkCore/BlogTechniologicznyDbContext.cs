using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using BlogTechniologiczny.Authorization.Roles;
using BlogTechniologiczny.Authorization.Users;
using BlogTechniologiczny.MultiTenancy;

namespace BlogTechniologiczny.EntityFrameworkCore
{
    public class BlogTechniologicznyDbContext : AbpZeroDbContext<Tenant, Role, User, BlogTechniologicznyDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public BlogTechniologicznyDbContext(DbContextOptions<BlogTechniologicznyDbContext> options)
            : base(options)
        {
        }
    }
}
