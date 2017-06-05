import { EsccNgappPage } from './app.po';

describe('escc-ngapp App', () => {
  let page: EsccNgappPage;

  beforeEach(() => {
    page = new EsccNgappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
