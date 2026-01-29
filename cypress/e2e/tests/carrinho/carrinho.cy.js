describe('Carrinho - Projeto Sutili', () => {

  it('CT10 - Adicionar produto ao carrinho', () => {
    // Acessar categoria
    cy.visit('https://www.sutiliaromas.com.br/vela-aromatica')

    // Abrir o primeiro produto da lista
    cy.get('.listagem-item').first().within(() => {
    cy.contains('Adicionar').click()
    })

    // Validar que abriu a modal do produto
    cy.contains('Finalizar compra').should('be.visible')
    
    // Validar que o carrinho foi atualizado
    cy.get('[class="input-mini"]').should('be.visible').and('value', '1')    

    // Clicar no botão da modal para adicionar 2 quantidade ao carrinho
    cy.get('[class="cor-secundaria icon-plus"]').click()
    cy.get('[class="input-mini"]').should('be.visible').and('value', '2')

    // Clicar no botão da modal para adicionar 3 quantidade ao carrinho
    cy.get('[class="cor-secundaria icon-plus"]').click()
    cy.get('[class="input-mini"]').should('be.visible').and('value', '3')

    
    // Fechar modal
    cy.get('[class="fancybox-item fancybox-close"]').click()

    
    // Validar que está na tela da categoria
    cy.url().should('include', '/vela-aromatica')

  })

})