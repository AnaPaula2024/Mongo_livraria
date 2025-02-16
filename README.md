# Mongo_livraria

Este projeto é uma aplicação Node.js que utiliza o framework Express para criar uma API simples de gerenciamento de livros. A aplicação se conecta a um banco de dados MongoDB e permite buscar livros por ID.

## Estrutura do Projeto

- `src/`
  - `config/`
    - `dbConnect.js`: Arquivo responsável pela configuração e conexão com o banco de dados MongoDB.
  - `app.js`: Arquivo principal da aplicação que configura o servidor Express e define as rotas e funções de manipulação de dados.

## Funcionalidades

- Conexão com o banco de dados MongoDB.
- Definição de um array de livros com informações básicas (ID e título).
- Função para buscar um livro pelo ID.

## Como Executar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure a conexão com o banco de dados em `dbConnect.js`.
4. Execute a aplicação com `node src/app.js`.

## Exemplo de Uso

A aplicação permite buscar livros pelo ID através de uma função `buscaLivro`. Por exemplo:

```javascript
const livro = buscaLivro(1);
console.log(livro); // { id: 1, titulo: "O Senhor dos Anéis" }
```

## Dependências

- express
- mongoose (ou outro driver de conexão com MongoDB)

## Contribuição

Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

## Licença

Este projeto está licenciado sob a licença MIT.

---
