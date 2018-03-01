import { CounterNgrxPage } from './app.po';

describe('counter-ngrx App', () => {
  let page: CounterNgrxPage;

  beforeEach(() => {
    page = new CounterNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
