import { AnotherExamplePage } from './app.po';

describe('another-example App', function() {
  let page: AnotherExamplePage;

  beforeEach(() => {
    page = new AnotherExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('another-example works!');
  });
});
