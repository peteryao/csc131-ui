import { Csc131UiPage } from './app.po';

describe('csc131-ui App', () => {
  let page: Csc131UiPage;

  beforeEach(() => {
    page = new Csc131UiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
