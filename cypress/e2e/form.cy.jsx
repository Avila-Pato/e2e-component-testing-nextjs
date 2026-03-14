describe('<ContactForm />', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/page/contact")
  })

  it("muestra error si el formulario está vacío", () => {

    cy.contains("Enviar").click()

    cy.get("#message").should(
      "contain",
      "Todos los campos son obligatorios"
    )
  })

  it("permite escribir en los inputs", () => {

    cy.get("#name").type("Patricio")

    cy.get("#email").type("patricio@test.com")

    cy.get("#name").should("have.value", "Patricio")

    cy.get("#email").should("have.value", "patricio@test.com")

  })

  it("envía el formulario correctamente", () => {

    cy.get("#name").type("Patricio")

    cy.get("#email").type("patricio@test.com")

    cy.contains("Enviar").click()

    cy.get("#message").should(
      "contain",
      "Formulario enviado por Patricio"
    )
  })

})