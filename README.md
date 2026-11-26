# SurfGuru QA | Cypress

Projeto acadêmico de QA autônomo — automação E2E de jornadas públicas do SurfGuru.
Alvo: https://www.surfguru.com.br (base canônica: https://surfguru.com.br).

## Objetivo e escopo
Validar a central de previsões, preferências de unidades, indicadores de um pico e tábua de marés. Cypress puro com Mocha (`describe`, `context`, `it`), dez testes independentes, retry nativo, sem Cucumber e sem esperas fixas. Não são enviados cadastros, pagamentos ou registros ao ambiente de produção.

## Regras de negócio levantadas
- RN01: a central disponibiliza pesquisa por localização e configurações de unidades.
- RN02: o campo de pesquisa aceita nome de praia ou cidade e disponibiliza ação de busca.
- RN03: o usuário pode selecionar unidades alternativas de altura e vento.
- RN04: a previsão de um pico apresenta indicadores de altura, período e vento.
- RN05: a consulta mensal de marés identifica estação e mês, informa extremos e apresenta horários e alturas.
- RN06 (fora da automação): recursos PRO, como histórico e alertas personalizados, dependem de assinatura; cadastro requer validação de e-mail. Não se presume acesso autenticado.

Estas regras são inferidas da interface e documentação públicas, não de especificação interna aprovada pelo proprietário.

## Casos de teste
| ID | Regra | Ação | Resultado esperado |
|---|---|---|---|
| CT01 | RN01 | Abrir central | Título visível |
| CT02 | RN02 | Digitar Cabedelo | Campo contém o texto e botão de busca habilitado |
| CT03 | RN03 | Selecionar outra unidade de altura | Valor selecionado corresponde à alternativa |
| CT04 | RN03 | Selecionar outra unidade de vento | Valor selecionado corresponde à alternativa |
| CT05 | RN04 | Abrir previsão de Santo Aleixo | Indicador de altura visível |
| CT06 | RN04 | Consultar período | Indicador de período visível |
| CT07 | RN04 | Consultar vento | Indicador de velocidade visível |
| CT08 | RN05 | Abrir marés de Cabedelo, novembro/2026 | Estação e mês visíveis |
| CT09 | RN05 | Consultar extremos | Máxima e mínima exibidas em metros |
| CT10 | RN05 | Consultar registros | Pelo menos um horário válido acompanhado de altura em metros |

CT02 não valida resultados de busca; CT03–04 não verificam persistência nem conversão numérica; CT05–07 verificam a presença dos indicadores, não precisão meteorológica. CT08–10 usam um mês fixo para tornar a consulta reproduzível, sem fixar valores naturais de maré.

## Benefícios por perfil
- Iniciante: estudar altura, vento e marés para escolher condições compatíveis com sua experiência.
- Intermediário: comparar picos e organizar sessões para desenvolver técnicas.
- Avançado: analisar período e ondulação; histórico e alertas PRO podem apoiar planejamento.
- Viajante: comparar destinos e planejar deslocamentos conforme as previsões.

Melhoria proposta (não implementada): perfil com nível, preferências de ondas, equipamentos, picos favoritos e recomendações personalizadas. Previsões não substituem avaliação presencial, orientação local ou critérios de segurança.

## Instalação e execução
Requisitos: Node.js 22, npm, Git, internet e VS Code opcional. Abra esta pasta no terminal.

```bash
npm install
npm test
```

Modo interativo:

```bash
npm run cy:open
```

Escolha E2E Testing, um navegador e `surfguru.cy.js`. Em falhas, confira screenshots em `cypress/screenshots/`. O GitHub Actions executa os testes em pushes e pull requests e salva screenshots de falhas. Após a primeira instalação, versione também o package-lock.json gerado.

## Publicação
Crie um repositório público vazio chamado `surfguru-qa` em https://github.com/new. Na pasta do projeto:

```bash
git init
git add .
git commit -m "feat: automacao QA SurfGuru com Cypress"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/surfguru-qa.git
git push -u origin main
```

Substitua SEU-USUARIO e confira a aba Actions. Nenhum repositório remoto foi criado automaticamente.

## Estratégia e limitações
Seletores semânticos por texto e placeholder observado; para medidas, associação label/for ou select no contêiner pai. Preferir data-cy e IDs específicos após inspeção real do DOM. Não inventamos atributos do site. O acesso direto retornou HTTP 403 no ambiente de pesquisa; o levantamento usou páginas indexadas. A estrutura DOM e a execução E2E não foram verificadas, portanto os seletores precisam de validação local e possíveis ajustes. A sintaxe JavaScript foi verificada com `node --check`. Nenhum resultado de aprovação ou defeito funcional é alegado. Execute com autorização e respeite os limites do serviço; não contorne bloqueios.

## Fontes públicas
- https://surfguru.com.br/previsao
- https://surfguru.com.br/previsao/brasil/pernambuco/sirinhaem/ilha-de-santo-aleixo
- https://surfguru.com.br/previsao/mare/30540/m?ano=26&mes=11
- https://surfguru.com.br/faqs
- https://surfguru.com.br/cadastro
