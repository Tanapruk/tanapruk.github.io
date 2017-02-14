import { TanaprukPage } from './app.po';

describe('tanapruk App', function() {
  let page: TanaprukPage;

  beforeEach(() => {
    page = new TanaprukPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
