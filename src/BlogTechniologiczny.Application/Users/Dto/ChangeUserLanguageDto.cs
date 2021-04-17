using System.ComponentModel.DataAnnotations;

namespace BlogTechniologiczny.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}