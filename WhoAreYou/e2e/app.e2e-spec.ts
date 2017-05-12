import { WhoAreYouPage } from './app.po';

describe('who-are-you App', () => {
  let page: WhoAreYouPage;

  beforeEach(() => {
    page = new WhoAreYouPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
