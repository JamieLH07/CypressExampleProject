
it('Go to Google', () => {
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click({force:true})
    cy.get('#APjFqb').type('Cypress Automation')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click({force:true})
    })