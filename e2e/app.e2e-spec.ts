import { ReservaAlfaPage } from './app.po';

describe('reserva-alfa App', function() {
  let page: ReservaAlfaPage;

  beforeEach(() => {
    page = new ReservaAlfaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
