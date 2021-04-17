using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace BlogTechniologiczny.Localization
{
    public static class BlogTechniologicznyLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(BlogTechniologicznyConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(BlogTechniologicznyLocalizationConfigurer).GetAssembly(),
                        "BlogTechniologiczny.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
