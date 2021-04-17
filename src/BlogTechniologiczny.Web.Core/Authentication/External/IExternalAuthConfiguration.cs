using System.Collections.Generic;

namespace BlogTechniologiczny.Authentication.External
{
    public interface IExternalAuthConfiguration
    {
        List<ExternalLoginProviderInfo> Providers { get; }
    }
}
