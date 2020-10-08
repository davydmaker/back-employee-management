# Back do Employee Management
CRUD simples de Funcionários e Cargos. Aplicação criada usando Node com [TypeScript](https://www.npmjs.com/package/typescript).

# Como Executar
Ao baixar o projeto, abra a janela do terminal no diretório do mesmo e então execute o comando abaixo para instalar as dependências do projeto: 

    npm install

Execute o comando abaixo para para criar o banco e as tabelas:

    npm run knex:migrate

[OPCIONAL] Execute o comando abaixo para inserir no banco alguns dados:/

    npm run knex:seed

Por fim inicie a aplicação com o comando:

    npm run dev
    
## Bibliotecas Incluídas
[cors](https://www.npmjs.com/package/cors) - utilizada para restringir o acesso a API para apenas alguns endereços (deixei aperto no código, com possibilidade para incluir).\
[express](https://www.npmjs.com/package/express) - utilizada para facilitar a criação da API com abstrações de rotas, middlewares e outras funções.\
[knex](https://www.npmjs.com/package/knex) - utilizada como query builder para controle de fluxo entre diferentes tipos de bancos e conta também com migrations, seeds e outras funções.\
[sqlite3](https://www.npmjs.com/package/sqlite3) - tipo de banco de dados relacional utilizado na aplicação.

## Rotas da Aplicação
Para acessar, basta mandar requisição para a rota usando o verbo HTTP em questão:
|                  |Funcionário      |Cargo       |
|------------------|-----------------|------------|
|Listar *(GET)*    |/employees       |/roles      |
|Visualizar *(GET)*|/employees/`:id` |/roles/`:id`|
|Cadastrar *(POST)*|/employees       |/roles      |
|Atualizar *(PUT)* |/employees/`:id` |/roles/`:id`|
|Deletar *(DELETE)*|/employees/`:id` |/roles/`:id`|
