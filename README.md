## Aplicação

app agregador de eventos para desenvolvedores chamado Meetapp (um acrônimo à Meetup + App).

## Funcionalidades

Abaixo estão descritas as funcionalidades da aplicação.

### Autenticação

Permite que um usuário se autentique utilizando e-mail e senha.

- A autenticação é feita utilizando JWT.
- É realizada a validação dos dados de entrada;

### Cadastro e atualização de usuários

Permite que novos usuários se cadastrem na aplicação utilizando nome, e-mail e senha.

Para atualizar a senha, o usuário deve também enviar um campo de confirmação com a mesma senha.

- Criptografa a senha do usuário para segurança.
- É realizada a validação dos dados de entrada;
