// Casos de teste: CT06 até CT10

const pico = '/previsao/brasil/pernambuco/sirinhaem/ilha-de-santo-aleixo';
const mare = '/previsao/mare/30540/m?ano=26&mes=11';

const visivel = texto => cy.contains(texto).should('be.visible');

Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes(
      "Identifier 'webroot' has already been declared"
    )
  ) {
    return false;
  }
});

describe('SurfGuru | Janiclecia Coelho', () => {

  context('Previsão de um pico', () => {

    beforeEach(() => cy.visit(pico));

    it('CT06 - apresenta o período primário das ondas', () => {
      cy.get('#bperiodo a')
        .should('be.visible')
        .click();

      cy.get('#titulo_periodo')
        .should('be.visible')
        .and('contain.text', 'Período Primário das Ondas');
    });

    it('CT07 - apresenta a velocidade média do vento', () => {
      cy.get('#bvento a')
        .should('be.visible')
        .click();

      cy.get('#titulo_vento')
        .should('be.visible')
        .and('contain.text', 'Velocidade Média do Vento');
    });

  });

  context('Tábua de marés', () => {

    beforeEach(() => cy.visit(mare));

    it('CT08 - identifica a estação e o mês consultado', () => {
      visivel(/PORTO DE CABEDELO/i);
      visivel(/novembro de 2026/i);
    });

    it('CT09 - apresenta os extremos de maré com unidade', () => {
      visivel(/Maré mais alta:\s*\d+[.,]\d+\s*m/i);
      visivel(/Maré mais baixa:\s*\d+[.,]\d+\s*m/i);
    });

    it('CT10 - apresenta horários e alturas de maré', () => {
      cy.contains(/\b(?:[01]\d|2[0-3]):[0-5]\dh\s*\d+[.,]\d+\s*m/i)
        .should('be.visible');
    });

  });

});