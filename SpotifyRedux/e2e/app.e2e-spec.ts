import { SpotifyReduxPage } from './app.po';

describe('spotify-redux App', () => {
  let page: SpotifyReduxPage;

  beforeEach(() => {
    page = new SpotifyReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
