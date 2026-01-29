describe('Modal do Produto - Projeto Sutili', () => {

  it('CT09 - Visualizar detalhes do produto', () => {
    // Acessar categoria "Vela Aromática"
    cy.visit('https://www.sutiliaromas.com.br/vela-aromatica')

    // Clicar no primeiro produto da lista
    cy.get('.listagem-item').first().within(() => {
    cy.contains('Adicionar').click()
    
    })
    
    // Validar informações da modal do produto
    cy.contains('Madeira Negra - 15gr').should('be.visible')
    cy.contains('R$ 7,00').should('be.visible')
    cy.contains('Estoque:').should('be.visible')

    // Caso exista descrição
    //cy.contains('Descrição').should('exist')
  })

})
