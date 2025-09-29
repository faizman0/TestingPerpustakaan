import loginPage from "../support/pageObject/loginPage";
import loginData from "../fixtures/loginData.json";
import bukuPage from "../support/pageObject/bukuPage";
import kategoriData from "../fixtures/kategoriData.json";
import { log } from "console";
import { isTypedArray } from "util/types";

describe("Login-OrangeHRM", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8000/login");

    loginPage.usernameInput(loginData.validUser);
    loginPage.passwordInput(loginData.validPass);
    loginPage.loginButton();

    cy.contains("Dashboard").should("be.visible");
  });
  
  it("TC_001 - Tambah kategori dengan text", () => {
    bukuPage.menuBuku();
  });

});