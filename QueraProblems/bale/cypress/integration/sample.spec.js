describe('Bale sample tests:', () => {

    beforeEach(() => {
        // Load the page
        cy.visit("index.html");
    })

    it('check for logo existence', () => {
        cy.get('.logo');        
        cy.get('img[src*="assets/images/home_logo.png"]');
    });

    it('check for title existence', () => {
        cy.get('h2').contains('به پیام رسان بله خوش آمدید');
        
    });
});
