describe('Cadastro de Usuário - Projeto Sutili', () => {

  it('CT01 - Criar conta com dados válidos', () => {
    //Acessar pagina de cadastro
    cy.visit('https://www.sutiliaromas.com.br')

    cy.get('[data-name="Caminho 98"]').click()

    cy.get('[class="span8"]').click()
    
    cy.get('[class="span8"]').type('yicix56161@oremal.com')
    
    cy.contains('button', 'Cadastrar').click()
    
    cy.url().should('include', '/conta/criar')

    
    //Preenchendo dados acesso
    cy.get('[id="id_confirmacao_email"]').type('yicix56161@oremal.com')

    //cy.get('[id="id_senha"]').type('Teste@1234')

    //cy.get('[id="id_confirmacao_senha"]').type('Teste@1234')

    //Preenchendo dados pessoais
    cy.get('[id="id_nome"]').type('João Silva')

    cy.get('[id="id_cpf"]').type('50908437080')

    cy.get('[id="id_telefone_celular"]').type('11987654321')

    cy.get('[id="id_cep"]').type('03548000')

    cy.get('[id="id_numero"]').type('0001')

    cy.contains('button', 'Criar Conta').click()

    //Validar conta criada com sucesso
    //cy.contains('Cliente criado com sucesso.').should('be.visible')
  })

  it('CT02 – Criar conta com e-mail já cadastrado', () => {
    //Acessar pagina de cadastro
    cy.visit('https://www.sutiliaromas.com.br')

    cy.get('[data-name="Caminho 98"]').click()

    cy.get('[class="span8"]').click()
    
    cy.get('[class="span8"]').type('febatata01@gmail.com')

    cy.contains('button', 'Cadastrar').click()
    //Validar mensagem de erro
    cy.contains('Já existe um cliente cadastrado com este email.').should('be.visible')
  })
})