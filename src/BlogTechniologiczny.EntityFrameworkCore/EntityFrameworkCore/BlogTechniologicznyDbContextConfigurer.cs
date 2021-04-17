using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace BlogTechniologiczny.EntityFrameworkCore
{
    public static class BlogTechniologicznyDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<BlogTechniologicznyDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<BlogTechniologicznyDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
