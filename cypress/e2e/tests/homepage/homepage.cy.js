describe('Homepage', () => {
    //Acessar a página inicial e verificar o título
    it('Deve acessar a página inicial e verificar o título', () => {
        cy.visit('https://www.sutiliaromas.com.br'); // Substitua pela URL da sua aplicação
        cy.title().should('include', 'Sutili Aromas'); // Substitua pelo título esperado
    })
})