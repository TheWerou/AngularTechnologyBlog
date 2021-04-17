using System.Threading.Tasks;
using BlogTechniologiczny.Models.TokenAuth;
using BlogTechniologiczny.Web.Controllers;
using Shouldly;
using Xunit;

namespace BlogTechniologiczny.Web.Tests.Controllers
{
    public class HomeController_Tests: BlogTechniologicznyWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}