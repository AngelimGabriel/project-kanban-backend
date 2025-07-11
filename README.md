# API KANBAN

- Esse projeto visa na criação de uma API para a criação de tarefas no estilo KANBAN, com rotas bem definidas e validações de requisições.

## Funcionalidade:

- Criação de tarefa
- Atualização de tarefas (pelo ID)
- Consultas de tarefas (todas ou por ID)
- Deletar tarefas (pelo ID)

## Tecnologias e linguagem utilizadas:

- Node.JS
- Express.JS
- TypeScript
- PostegreSQL

## Bibliotecas utilizadas:

- TypeORM
- Celebrate
- dotenv
- Joi

## Dependências de desenvolvimento:

- Prettier para a formatação do código
- Nodemon para aplicar as mudanças no server online a medida que o projeto avança

# Como utilizar:

- Clone o repositório `git clone https://github.com/AngelimGabriel/project-kanban-backend`
- `cd project-kanban-backend`
- Criei o arquivo `.env` na raiz do projeto
- Adicione as seguintes váriaveis de ambiente:
  1. DB_HOST={`localhost` ou, caso tenha utilizado `--host {SEU_IP}` no package.json, coloque o IP do host}
  2. DB_PORT={Porta na qual o seu postegre utiliza}
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

- Rode `npm run dev`
- Para testes com o INSOMNIA utilize o arquivo `kanban-request.yaml` e utilize as requisições criadas para esse fim.
