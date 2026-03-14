describe('Home page - Fetch', () => {
  it('navega a la página de posts desde la página principal', () => {
    cy.visit('http://localhost:3000/')

    // Verifica que el link existe y hace click
    cy.get('a[href="/fetch"]').should('be.visible').click()

    // La URL debe incluir /fetch
    cy.url().should('include', '/fetch')

    // El título de la página de posts debe aparecer
    cy.get('h1').should('contain', 'Posts')

    // Espera a que los posts carguen de la API
    cy.get('li', { timeout: 10000 }).should('have.length.greaterThan', 0)

    // El primer post debe tener título y cuerpo
    cy.get('li').first().within(() => {
      // no debe estar vacío
      cy.get('h2').should('not.be.empty')
      cy.get('p').should('not.be.empty')
    })
  })
})
