// Responsável: Filipe Durand
// Casos de teste: CT01 até CT05

const central = '/previsao';
const pico = '/previsao/brasil/pernambuco/sirinhaem/ilha-de-santo-aleixo';

const visivel = texto => cy.contains(texto).should('be.visible');

const selectMedida = regex => cy.contains(regex).then($label => {
  const id = $label.attr('for');

  if (id && $label.is('label')) {
    return cy.get(`#${Cypress.$.escapeSelector(id)}`);
  }

  return cy.wrap($label)
    .parent()
    .find('select')
    .should('have.length', 1);
});

Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes(
      "Identifier 'webroot' has already been declared"
    )
  ) {
    return false;
  }
});

describe('SurfGuru | Filipe Durand', () => {

  context('Central de previsões e preferências', () => {

    beforeEach(() => cy.visit(central));

    it('CT01 - apresenta a central de previsões', () => {
      visivel(/Central de previsões/i);
    });

    it('CT02 - permite preencher a pesquisa por praia ou cidade', () => {
      cy.get('a[href="#tab-praia"]')
        .should('be.visible')
        .click();

      cy.get('#nome-procura')
        .should('be.visible')
        .clear()
        .type('Cabedelo')
        .should('have.value', 'Cabedelo');

      cy.get('#btn-procura')
        .should('be.visible')
        .and('not.be.disabled');
    });

    it('CT03 - permite alterar a unidade de altura', () => {
      selectMedida(/Alturas em/i)
        .should('be.visible')
        .then($select => {
          const alternativa = [...$select[0].options]
            .find(o => !o.disabled && o.value && !o.selected);

          expect(alternativa, 'unidade alternativa').to.exist;

          cy.wrap($select)
            .select(alternativa.value)
            .should('have.value', alternativa.value);
        });
    });

    it('CT04 - permite alterar a unidade de vento', () => {
      selectMedida(/Vento em/i)
        .should('be.visible')
        .then($select => {
          const alternativa = [...$select[0].options]
            .find(o => !o.disabled && o.value && !o.selected);

          expect(alternativa, 'unidade alternativa').to.exist;

          cy.wrap($select)
            .select(alternativa.value)
            .should('have.value', alternativa.value);
        });
    });

  });

  context('Previsão de um pico', () => {

    beforeEach(() => cy.visit(pico));

    it('CT05 - apresenta a altura total das ondas', () => {
      visivel(/Altura total das ondas/i);
    });

  });

});