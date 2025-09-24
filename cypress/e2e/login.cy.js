import loginPage from "../support/pageObject/loginPage";
import loginData from "../fixtures/loginData.json";
import { log } from "console";

describe('Login-OrangeHRM', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000/login');
    });

    it('TC_001 - Login dengan username dan password benar', () => {
        cy.intercept('GET', '**/dashboard').as('loginRequest');

        loginPage.usernameInput(loginData.validUser);
        loginPage.passwordInput(loginData.validPass);
        loginPage.loginButton();

        loginPage.VerifyLoginSuccess();
        // cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);
    });

    it('TC_002 - Login dengan username tidak terdaftar', () => {
        cy.intercept('GET', 'http://127.0.0.1:8000/login').as('loginRequest');

        loginPage.usernameInput(loginData.invalidUser);
        loginPage.passwordInput(loginData.validPass);
        loginPage.loginButton();

        loginPage.verifyLoginError();
    });
    
    it('TC_003 - Login dengan password salah', () => {
        cy.intercept('GET', 'http://127.0.0.1:8000/login').as('loginRequest');

        loginPage.usernameInput(loginData.validUser);
        loginPage.passwordInput(loginData.invalidPass);
        loginPage.loginButton();

        loginPage.verifyLoginError();
    });

    // it('TC_004 - Login dengan username dan password kosong', () => {
    //     cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('loginRequest');

    //     loginPage.loginButton();

    //     loginPage.requiredMessage();
    // });

    it('TC_005 - Login dengan tombol enter', () => {
        cy.intercept('GET', '**/dashboard').as('loginRequest');
        loginPage.usernameInput(loginData.validUser);
        loginPage.passwordInput(loginData.validPass);
        cy.get('input[name="password"]').type('{enter}');

        loginPage.VerifyLoginSuccess();
    });

    // it('TC_006 - Menggunakan fitur lupa password', () => {
    //     loginPage.forgotPasswordLink.click();

    //     cy.url().should('include', '/requestPasswordReset');
    // });

    it('Logout', () => {
        cy.intercept('GET', '**/dashboard').as('loginRequest');

        loginPage.usernameInput(loginData.validUser);
        loginPage.passwordInput(loginData.validPass);
        loginPage.loginButton();

        loginPage.VerifyLoginSuccess();
        
        loginPage.logoutButton();
    });
});