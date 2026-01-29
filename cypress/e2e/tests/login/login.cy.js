describe('Login - Projeto Sutili', () => {

    
  it('CT01 - Login com dados válidos', () => {
    // Acessar página inicial
    cy.visit('https://www.sutiliaromas.com.br/conta/login')

    // Preencher e-mail válido
    cy.get('[class="span9"]').type('yicix56160@oremal.com')

    // Preencher senha válida
    cy.get('[id="id_senha"]').type('Teste@1234')

    // Clicar no botão "Entrar"
    cy.contains('button', 'Prosseguir').click()

    // Validar que entrou na conta
    cy.url().should('include', '/conta')

    cy.contains('Minha Conta').should('be.visible')
  })

  it('CT02 - Login com senha incorreta', () => {
    // Acessar página inicial
    cy.visit('https://www.sutiliaromas.com.br/conta/login')

    cy.get('[class="span9"]').type('yicix56160@oremal.com')

    cy.get('[id="id_senha"]').type('SenhaErrada1234')

    cy.contains('button', 'Prosseguir').click()

    cy.contains('Não foi possível entrar pois o email ou senha não conferem. Por favor tente novamente com outro email ou senha.').should('be.visible')
  })

  it('CT03 - Login com e-mail não cadastrado', () => {
    cy.visit('https://www.sutiliaromas.com.br/conta/login')

    cy.get('[class="span9"]').type('inexistente@oremal.com')

    cy.get('[id="id_senha"]').type('Teste@1234')

    cy.contains('button', 'Prosseguir').click()

    cy.contains('Não foi possível entrar pois o email ou senha não conferem. Por favor tente novamente com outro email ou senha.').should('be.visible')
  })

  it('CT04 - Validar campos obrigatórios', () => {
    cy.visit('https://www.sutiliaromas.com.br/conta/login')
    // Não preencher nada
    cy.contains('button', 'Prosseguir').click()

    // Mensagens podem variar, ajuste conforme o site
    cy.contains('Este campo é obrigatório.').should('be.visible')
  })
})