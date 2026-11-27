# SurfGuru — Automação de Testes QA

## Informações acadêmicas

- **Instituição:** UNIESP — Centro Universitário
- **Curso:** Sistemas para Internet
- **Área:** Quality Assurance (QA)
- **Integrantes:** Filipe Durand e Janiclecia Coelho

## 1. Objetivo do projeto

Desenvolver uma suíte de testes automatizados End-to-End (E2E) para validar funcionalidades do portal SurfGuru, utilizando Cypress e a estrutura nativa do Mocha.

**Sistema avaliado:** https://surfguru.com.br

**Repositório:** https://github.com/FilipedeLira/SurfGuru

## 2. Tecnologias utilizadas

- JavaScript
- Cypress 14.5.4
- Mocha
- Node.js
- NPM
- Git e GitHub
- GitHub Actions
- Visual Studio Code

## 3. Funcionalidades avaliadas

- Central de previsões.
- Pesquisa por praias e cidades.
- Configuração das unidades de medida.
- Previsão de ondas e ventos.
- Consulta à tábua de marés.

## 4. Regras de negócio avaliadas

| Código | Regra |
|---|---|
| RN01 | O sistema deve disponibilizar a central de previsões. |
| RN02 | O usuário deve conseguir preencher o campo de pesquisa por praia ou cidade. |
| RN03 | O sistema deve permitir selecionar unidades de altura e vento. |
| RN04 | O sistema deve apresentar informações sobre altura e período das ondas. |
| RN05 | O sistema deve disponibilizar informações sobre a velocidade média do vento. |
| RN06 | A tábua de marés deve apresentar identificação da estação, mês, horários e alturas. |

## 5. Casos de teste

| ID | Cenário | Resultado esperado | Regra | Responsável |
|---|---|---|---|---|
| CT01 | Central de previsões | Central apresentada | RN01 | Filipe |
| CT02 | Pesquisa por praia ou cidade | Campo preenchido e botão habilitado | RN02 | Filipe |
| CT03 | Unidade de altura | Unidade alternativa selecionada | RN03 | Filipe |
| CT04 | Unidade de vento | Unidade alternativa selecionada | RN03 | Filipe |
| CT05 | Altura total das ondas | Informação visível | RN04 | Filipe |
| CT06 | Período primário das ondas | Informação visível | RN04 | Clecinha |
| CT07 | Velocidade média do vento | Informação visível | RN05 | Clecinha |
| CT08 | Estação e mês da maré | Identificação correta | RN06 | Clecinha |
| CT09 | Extremos de maré | Alturas máxima e mínima apresentadas com unidade | RN06 | Clecinha |
| CT10 | Horários e alturas | Horários e alturas apresentados | RN06 | Clecinha |

## 6. Estratégia de automação

O projeto utiliza Cypress puro, com os recursos nativos do Mocha:

- describe
- context
- it
- beforeEach

Foram implementados dez casos de teste, distribuídos em duas suítes. A estratégia utiliza seletores identificados no DOM real, expressões regulares, verificações de visibilidade e asserções.

Não são utilizados Cucumber, Gherkin ou esperas fixas com cy.wait.

## 7. Estrutura do projeto

- .github/workflows/cypress.yml
- cypress/e2e/filipe.cy.js
- cypress/e2e/clecinha.cy.js
- cypress.config.js
- package.json
- package-lock.json
- .gitignore
- README.md

A estrutura acima representa o projeto completo validado localmente. A publicação das duas contribuições no repositório está em andamento.

## 8. Instalação e execução

Clonar o repositório:

`git clone https://github.com/FilipedeLira/SurfGuru.git`

Acessar a pasta:

`cd SurfGuru`

Instalar as dependências:

`npm ci`

Executar todos os testes:

`npm test`

Abrir a interface gráfica do Cypress:

`npm run cy:open`

Executar os testes de Filipe:

`npx cypress run --spec "cypress/e2e/filipe.cy.js"`

Executar os testes de Clecinha:

`npx cypress run --spec "cypress/e2e/clecinha.cy.js"`

No Windows, caso o PowerShell restrinja a execução de scripts, utilizar npm.cmd e npx.cmd.

## 9. Resultados da execução local

Execução realizada em 26/11/2026.

| Suíte | Testes | Aprovados | Falhas |
|---|---:|---:|---:|
| Filipe | 5 | 5 | 0 |
| Clecinha | 5 | 5 | 0 |
| Total | 10 | 10 | 0 |

**Taxa de aprovação local: 100%.**

Ambiente utilizado: Windows, Cypress 14.5.4 e Electron 130.

## 10. Integração contínua — CI

O GitHub Actions foi configurado para executar o pipeline em pushes, pull requests e acionamentos manuais.

O pipeline possui duas etapas:

- Validação do código e instalação das dependências.
- Execução dos testes automatizados E2E.

Em caso de falha, as capturas de tela são disponibilizadas como artefatos para análise.

## 11. Registro de ocorrência — INC-001

Durante a execução remota, o servidor do SurfGuru retornou HTTP 403 Forbidden, impedindo o carregamento das páginas necessárias aos testes.

| Informação | Resultado |
|---|---|
| Data | 26/11/2026 |
| Ambiente | GitHub Actions — Ubuntu |
| Erro | HTTP 403 Forbidden |
| Validação do código | Aprovada |
| Testes locais | 10 de 10 aprovados |
| Testes remotos CT01–CT05 | 2 falhas e 3 não executados |
| Evidências | Logs e screenshots |
| Situação | Restrição de acesso remoto pendente |

Os testes foram preservados sem mecanismos destinados a mascarar falhas ou contornar restrições de acesso.

## 12. Versionamento e colaboração

O projeto utiliza branches específicas para organizar as contribuições dos integrantes:

- main — branch principal.
- feature/testes-filipe — CT01 a CT05.
- feature/testes-clecinha — CT06 a CT10, publicação planejada.

A integração das contribuições é realizada por meio de Pull Requests, permitindo rastreabilidade, revisão e acompanhamento das alterações.

## 13. Limitações dos testes

- CT02 verifica o preenchimento da pesquisa, não a precisão dos resultados.
- CT03 e CT04 verificam a seleção das unidades, não sua persistência ou conversão matemática.
- CT05 a CT07 verificam a apresentação das informações, não a precisão meteorológica.
- CT08 a CT10 utilizam novembro de 2026 como período de referência.
- A execução depende da disponibilidade e da autorização de acesso ao portal externo.
- A aprovação integral no GitHub Actions permanece pendente.

## 14. Conclusão

O projeto demonstra a aplicação prática dos conceitos de Quality Assurance, automação de testes, controle de versão, integração contínua e análise de falhas.

Os dez casos de teste foram aprovados no ambiente local. A restrição de acesso identificada no ambiente remoto foi documentada, preservando a transparência e a confiabilidade dos resultados.

**Projeto acadêmico desenvolvido para fins educacionais.**
