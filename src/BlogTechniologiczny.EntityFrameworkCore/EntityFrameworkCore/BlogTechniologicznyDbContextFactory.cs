using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using BlogTechniologiczny.Configuration;
using BlogTechniologiczny.Web;

namespace BlogTechniologiczny.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class BlogTechniologicznyDbContextFactory : IDesignTimeDbContextFactory<BlogTechniologicznyDbContext>
    {
        public BlogTechniologicznyDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<BlogTechniologicznyDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            BlogTechniologicznyDbContextConfigurer.Configure(builder, configuration.GetConnectionString(BlogTechniologicznyConsts.ConnectionStringName));

            return new BlogTechniologicznyDbContext(builder.Options);
        }
    }
}
