import { BlogTechniologicznyTemplatePage } from './app.po';

describe('BlogTechniologiczny App', function() {
  let page: BlogTechniologicznyTemplatePage;

  beforeEach(() => {
    page = new BlogTechniologicznyTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
