describe('Tests.vue', () => {
  it('Visits the tests url', () => {
    cy.visit('/tests')
    cy.contains('h1', 'Ce titre peut changer de couleur')

    cy.get('#change-color').trigger('click')
    cy.get('h1').should('have.css', 'color', 'rgb(0, 128, 0)')
  })
})
