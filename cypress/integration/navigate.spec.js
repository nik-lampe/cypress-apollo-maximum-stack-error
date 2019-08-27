describe('Navigate through the page', () => {

  it(`Can visit /`, () => {
    cy.visit('/')
    cy.contains('PUPSTAGRAM').should('be.visible')
  })


  it(`Can visit /african/Z1gPiBt`, () => {
    cy.visit('/african/Z1gPiBt')
    cy.contains('african').should('be.visible')
  })

  it(`Can visit /airedale/ZNDtCU`, () => {
    cy.visit('/airedale/ZNDtCU')
    cy.contains('airedale').should('be.visible')
  })

})
