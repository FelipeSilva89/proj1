describe('Busca de Produtos - Projeto Sutili', () => {

  it('CT07 - Buscar produto existente', () => {
    // Acessar página inicial
    cy.visit('https://www.sutiliaromas.com.br')

    // Digitar termo existente
    cy.get('input[name="q"]').type('vela')

    // Confirmar busca
    cy.get('button[aria-label="Buscar"]').click()

    // Validar que produtos foram exibidos
    cy.contains('Vela').should('exist')
  })

  it('CT08 - Buscar produto inexistente', () => {
    cy.visit('https://www.sutiliaromas.com.br')

    // Digitar termo inexistente
    cy.get('input[name="q"]').type('xyz123')

    // Confirmar busca
    cy.get('button[aria-label="Buscar"]').click()

    // Validar mensagem de "nenhum produto encontrado"
    cy.contains('não encontrou nenhum resultado').should('be.visible')
  })

})