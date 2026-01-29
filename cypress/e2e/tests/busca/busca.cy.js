describe('Busca de Produtos - Projeto Sutili', () => {

  it('CT07 - Buscar produto existente e validar nos resultados', () => {
    const termoBuscado = 'Vela'

    cy.visit('https://www.sutiliaromas.com.br')

    cy.get('input[name="q"]').type(termoBuscado)
    cy.get('button[aria-label="Buscar"]').click()

    // Validar que os resultados exibem o termo buscado
    cy.get('.listagem-item').each(($el) => {
      cy.wrap($el).should('contain.text', termoBuscado)
    })
  })

  it('CT08 - Buscar produto inexistente', () => {
    const termoInexistente = 'xyz123'
    cy.visit('https://www.sutiliaromas.com.br')

    // Digitar termo inexistente
    cy.get('input[name="q"]').type('xyz123')

    // Confirmar busca
    cy.get('button[aria-label="Buscar"]').click()

    // Validar mensagem de "nenhum produto encontrado"
    cy.get('input[name="q"]').type(termoInexistente)
    cy.get('button[aria-label="Buscar"]').click()
    cy.contains('não encontrou nenhum resultado').should('be.visible')
  })

})