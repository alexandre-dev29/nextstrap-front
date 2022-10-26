describe("my first test of home", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should just say okay", function () {
    expect(true).to.eq(true);
  });
  it("should find the headphone banner", function () {
    cy.contains("Headphone");
  });

  it("should check if products categories are there", function () {
    cy.contains("Product List");
  });
  it("should conatin link to headphone detail page", function () {
    cy.contains("Search..").children("input").type("Alexandre").should("contain.text", "Alexandre");
  });
});
