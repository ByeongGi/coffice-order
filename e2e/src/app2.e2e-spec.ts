import { AppPage } from './app.po';

describe('단위테스트2', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('테스트 내용 ', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('백다방 메뉴표');
  });

  it('테스트 내용2 ', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('백다방 메뉴표');
  });

  it('테스트 내용3 ', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('백다방 메뉴표!');
  });

});
