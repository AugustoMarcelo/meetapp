<h3 align="center">
    <img src="https://user-images.githubusercontent.com/11545976/80634403-d5e77300-8a30-11ea-9720-437d73af2616.png">
</h3>

<h3 align="center">
  [GoStack7] | Desafio para certificação
</h3>

---

## 📑 Sobre

**Meetapp** (acrônimo para Meetup + App) é uma aplicação que permite gerenciar eventos para desenvolvedores. A aplicação está dividida entre back end, front end e o mobile. O front end representa a visão do usuário que irá cadastrar, editar ou remover os meetups, perfil do usuário e possibilidade de criar uma conta. O mobile permite que os usuários (desenvolvedores interessados) possam se inscrever nos meetups. A aplicação também realiza envio de e-mail para os criadores dos meetups, sempre que um desenvolvedor realizar uma inscrição. Abaixo, seguem os links para as outras versões.

<h4 align="center">
  <a href="https://github.com/AugustoMarcelo/meetapp-mobile">Mobile</a> | <a href="https://github.com/AugustoMarcelo/meetapp-frontend">Front end</a>
</h4>

---

## ⚙ Tecnologias utilizadas

- NodeJS
- express
- postgres
- sequelize
- yup
- multer
- cors
- date-fns
- express-async-errors
- express-handlebars
- nodemailer
- nodemailer-express-handlerbars
- jsonwebtoken
- bcrypt
- nodemon

---

## 💻 Instruções para execução

- Caso esteja utilizando docker, poderá criar e inicializar sua base de dados com os comandos abaixo:
```bash
  # criando container com imagem do banco postgres
  docker run --name postgres -e POSTGRES_PASSWORD=postgres -d postgres

  # inicializando os bancos de dados
  docker start postgres
```

- Faça o download do projeto:
```bash
  # clonando o repositório
  git clone https://github.com/AugustoMarcelo/meetapp-backend.git

  # acessando a pasta
  cd gobarber-backend

  # fazendo download das dependências
  yarn
```

- no arquivo `src/config/database.js` você poderá alterar as variáveis para conexão com o banco de dados;

- Para criar as tabelas, execute o seguinte comando:
```bash
  # criando as tabelas no banco de dados
  yarn sequelize db:migrate

  # criando um usuário administrador: email: admin@meetapp.com e senha: 123456
  yarn sequelize db:seed:all
```

- Com o banco de dados rodando e as tabelas criadas, inicialize a aplicação e o sistema de filas para envio de e-mails:
```bash
  # inicializando servidor
  yarn dev
```
