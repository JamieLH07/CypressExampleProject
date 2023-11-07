import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage();

beforeEach(function () {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

it("Login - Successful Login Test", function () {
  loginPage.enterUsername("Admin");
  loginPage.enterPassword("admin123");
  loginPage.clickLogin();
  cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
    "contain",
    "Dashboard"
  );
});

it("Login - Incorrect Username", function () {
  loginPage.enterUsername("Admin123");
  loginPage.enterPassword("admin123");
  loginPage.clickLogin();
  cy.get(".oxd-alert-content > .oxd-text").should(
    "contain",
    "Invalid credentials"
  );
});

it("Login - Incorrect Password", function () {
  loginPage.enterUsername("Admin");
  loginPage.enterPassword("admin1234");
  loginPage.clickLogin();
  cy.get(".oxd-alert-content > .oxd-text").should(
    "contain",
    "Invalid credentials"
  );
});
