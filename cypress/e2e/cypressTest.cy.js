const { render } = require("@testing-library/react");

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("dark mode change test", () => {
    cy.get(".relative > .overflow-hidden").click();
    cy.contains("LIGHT MODE");
  });

  it("language change test", () => {
    const languageChange = cy.get("[data-test-id=language-change]");
    cy.contains("I am a Frontend Developer...");
    languageChange.click();
    cy.contains("Frontend Yazılım Geliştirici...");
    languageChange.click();
    cy.contains("Skills");
    languageChange.click();
    cy.contains("Yetenekler");
    cy.contains("Profil");
    languageChange.click();
    cy.contains("Profile");
    cy.contains("Projects");
    languageChange.click();
    cy.contains("Projeler");
  });


});
