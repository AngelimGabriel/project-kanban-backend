# API Kanban

Este projeto tem como objetivo a criação de uma API REST para gerenciamento de tarefas no estilo Kanban, com rotas bem definidas e validações utilizando a biblioteca Celebrate.

## Funcionalidades

- Criar tarefa
- Atualizar tarefa (por ID)
- Consultar tarefas (todas ou por ID)
- Deletar tarefa (por ID)

## Tecnologias e Linguagens Utilizadas

- Node.js
- Express.js
- TypeScript
- PostgreSQL

## Bibliotecas Utilizadas

- TypeORM
- Celebrate (validação com Joi)
- dotenv

## Dependências de Desenvolvimento

- Prettier (formatação de código)
- Nodemon (reinício automático do servidor)

## Como Utilizar

- Clone o repositório:

```bash
git clone https://github.com/AngelimGabriel/project-kanban-backend
cd project-kanban-backend
```

- Execute `npm install` para instalar as dependências.
- Crie um arquivo `.env` na raiz do projeto
- Adicione as seguintes váriaveis de ambiente:
  1. DB_HOST={`localhost` ou, caso tenha utilizado `--host {SEU_IP}` no package.json, coloque o IP do host}
  2. DB_PORT={Porta usada pelo seu PostgreSQL}
  3. DB_USERNAME={nome de usuário do banco de dados}
  4. DB_PASSWORD={senha do banco de dados}
  5. DB_NAME={nome do banco de dados}
- Crie uma tabela no seu banco de dados com a seguinte query:

  ```sql
    CREATE TABLE IF NOT EXISTS public.tasks
    (
        id uuid NOT NULL DEFAULT gen_random_uuid(),
        titulo character varying(255) COLLATE pg_catalog."default" NOT NULL,
        status character varying(20) COLLATE pg_catalog."default" NOT NULL,
        categoria character varying(20) COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT tasks_pkey PRIMARY KEY (id),
        CONSTRAINT tasks_status_check CHECK (status::text = ANY (ARRAY['A fazer'::character varying, 'Em andamento'::character varying, 'Concluída'::character varying]::text[])),
        CONSTRAINT tasks_categoria_check CHECK (categoria::text = ANY (ARRAY['To Do'::character varying, 'Doing'::character varying, 'Done'::character varying]::text[]))
    )

    TABLESPACE pg_default;

    ALTER TABLE IF EXISTS public.tasks
    OWNER to postgres;
  ```

- Execute o comando `npm run dev` para iniciar o servidor em modo de desenvolvimento.
- Para testes com o INSOMNIA utilize o arquivo `kanban-request.yaml` e utilize as requisições criadas para esse fim.
