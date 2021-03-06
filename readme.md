
# Tópicos Avançados em SI

React DOM

## Aula 01 - 21/02/2022
- Conhecendo o React
- Criando uma aplicação
```
npx create-react-app nome_aplicacao
```

## Aula 02 - 07/03/2022
- Componentes em React
- Render de HTML
- Arquivos JSON
- Função .map()
- Leitura de arquivos JSON
- Variáveis de estado (state)

## Aula 03 - 14/03/2022
### Exemplo 01
- Montando tabela de um arquivo de origem JSON
- Pesquisando texto em um arquivo JSON

### Exemplo 02
- Função .filter()
- Diferenças entre .filter() e .map()
- Pesquisa em tabela não finalizado

## Aula 04 - 21/03/2022
- Término da explicação de .filter()
- Término da pesquisa em tabela
- Exercício (conteúdo em [https://github.com/rodescobar/TASI2022/tree/main/aula04/src/exercicio])

## Aula 05 - 28/03/2022
- Trabalhando com axios
- Buscando informações no jsonplaceholer com axios

```
npm install --save axios
```

## Aula 05 - 28/03/2022 - Exercício
- Exercício valendo 1,00 ponto na média.
- Data de entrega 02/04/2022
- Pode ser entregue até o dia 26/06/2002, VALENDO SOMENTE 0,5 PONTO
- [Link](https://github.com/rodescobar/TASI2022/tree/main/aula05-Exercicio)

## Aula 06 - 04/04/2022
- Conhecendo a API da Marvel
- Entendendo campos necessários para conexão
- Trabalhando com variáveis globais .ENV
- [Exercício de fixação](https://github.com/rodescobar/TASI2022/tree/main/aula06)
```
npm install --save js-md5
```

## Aula 07 - 11/04/2022
- terminando exercício da API da Marvel
- Trabalhando com Rotas
- Iniciando com Material-ui

## Aula 08 - 18/04/2022
- Material-UI
- ThemeProvider
- Componentes (Paper, Typography, Button, Switch e Checkbox)

## Aula 09 - 25/04/2022
- Material-UI
- Autocomplete, X-data-grid

## Aula 10 - 02/05/2022
- Material-UI - Tradução para BR
- Cards
- Link com react-route

## Aula 10 - 02/05/2022 - Exercício
- Exercício valendo 2,00 pontos na média.
- Data de entrega 02/0452022
- [Link](https://github.com/rodescobar/TASI2022/tree/main/aula10-exercicio)

## Aula 11 - 09/05/2022
- Trabalhando com REST/API
- Execução de testes com backend através do ThunderClient
- Criação de Login / Registrar usuário
- Armazenamento de Token em localStorage

## Aula 12 - 16/05/2022
- Adicionando validação de usuário com *React-Router-Dom*
- Utilizando a opção *header* do axios
- Trabalhando com CRUD de produtos ( Listar, Novo )

## Aula 13 - 23/05/2022
- Trabalhando com .ENV para *base url*
- Criando API em axios para adição automatica de *headers*

## Aula 14 - 30/05/2022
- Trabalhando com CRUD de produtos ( Altear e Excluir )

## Aula 15- 06/06/2022
- Heroku
```server.js
const express = require("express");

const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));


app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, "public", "index.html")));

app.listen(port, () => console.log(`Server listening on port ${port}`));
```
- Vercel
- Iniciar VPS


# Backend utilizado em aula
```http
https://backendaula.herokuapp.com
```
[Código fonte](https://github.com/rodescobar/backendAula)


# Programas necessários para as aulas
- VSCODE ide free para criação de códigos
- NodeJS
- Navegador Web
