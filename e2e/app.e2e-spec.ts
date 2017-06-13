import { IndividualProjectClientSidePage } from './app.po';

describe('individual-project-client-side App', () => {
  let page: IndividualProjectClientSidePage;

  beforeEach(() => {
    page = new IndividualProjectClientSidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
