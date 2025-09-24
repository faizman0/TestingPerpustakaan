import loginPage from "../support/pageObject/loginPage";
import loginData from "../fixtures/loginData.json";
import kategoriPage from "../support/pageObject/kategoriPage";
import kategoriData from "../fixtures/kategoriData.json";
import { log } from "console";

describe("Login-OrangeHRM", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8000/login");

    loginPage.usernameInput(loginData.validUser);
    loginPage.passwordInput(loginData.validPass);
    loginPage.loginButton();

    cy.contains("Dashboard").should("be.visible");
  });

  // it("TC_001 - Tambah kategori dengan text", () => {
  //   kategoriPage.menuKategori();

  //   kategoriPage.addKategori();

  //   kategoriPage.kategoriInput(kategoriData["kategori-text"]);

  //   kategoriPage.btnSimpanKategori();

  //   kategoriPage.verifikasiAlertSuccess();
  // });

  // it("TC_002 - Tambah kategori dengan text number", () => {
  //   kategoriPage.menuKategori();

  //   kategoriPage.addKategori();

  //   kategoriPage.kategoriInput(kategoriData["kategori-text-number"]);

  //   kategoriPage.btnSimpanKategori();

  //   kategoriPage.verifikasiAlertSuccess();
  // });

  // it("TC_003 - Tambah kategori dengan text symbol", () => {
  //   kategoriPage.menuKategori();

  //   kategoriPage.addKategori();

  //   kategoriPage.kategoriInput(kategoriData["kategori-text-symbol"]);

  //   kategoriPage.btnSimpanKategori();

  //   kategoriPage.verifikasiAlertSuccess();
  // });

  // it("TC_004 - Tambah kategori dengan text space", () => {
  //   kategoriPage.menuKategori();

  //   kategoriPage.addKategori();

  //   kategoriPage.kategoriInput(kategoriData["kategori-text-space"]);

  //   kategoriPage.btnSimpanKategori();

  //   kategoriPage.verifikasiAlertSuccess();
  // });

  // it("TC_005 - Tambah kategori dengan nama yang sudah ada", () => {
  //   kategoriPage.menuKategori();

  //   kategoriPage.addKategori();

  //   kategoriPage.kategoriInput(kategoriData["kategori-text"]);

  //   kategoriPage.btnSimpanKategori();

  //   kategoriPage.verifikasiAlertNamaKategoriSudahAda();
  // });

  // it("TC_006 - show detail", () => {
  //   kategoriPage.menuKategori();
  //   cy.get(':nth-child(1) > .text-center > .btn-group > .btn-info')
  //   .click();
  // });

  // it("TC_006 - Edit", () => {
  //   kategoriPage.menuKategori();
  //   cy.get(':nth-child(1) > .text-center > .btn-group > .btn-warning')
  //   .click();

  //   kategoriPage.kategoriEditInput();
  //   kategoriPage.kategoriInput(kategoriData["kategori-text"]);
  //   kategoriPage.btnSimpanKategori();
  //   kategoriPage.verifikasiAlertSuccess();
  // });

  
});
