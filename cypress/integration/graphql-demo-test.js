/// <reference types="cypress" />

describe('Graphql demo (Rick & Morty)', () => {
  beforeEach(() => {
    cy.visit('/graphql-demo')
  })

  it('displays characters list', () => {
    cy.get(`[data-testid="characters-container"] > div`).should(
      'have.length',
      20
    )
  })

  it('navigate to character details when clicked', () => {
    let charId
    let charName

    cy.get(`[data-testid="characters-container"] > div`).first().as('firstChar')

    cy.get('@firstChar')
      .invoke('attr', 'data-testid')
      .then((id) => (charId = id))

    cy.get('@firstChar').within(() => {
      cy.get('h3').then(($name) => (charName = $name.text()))
    })

    cy.get('@firstChar').click()

    cy.wait(500)

    cy.get('h1').then(($title) => {
      expect($title.text()).to.equal(charName)
    })

    cy.location('pathname').then((pathname) => {
      expect(pathname).to.include(`character/${charId}`)
    })
  })
})
