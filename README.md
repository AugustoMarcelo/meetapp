## Aplicação

app agregador de eventos para desenvolvedores chamado Meetapp (um acrônimo à Meetup + App).

## Funcionalidades

Abaixo estão descritas as funcionalidades da aplicação.

### Gerenciamento de arquivos

Rota para upload de arquivos que cadastra em uma tabela o caminho e o nome do arquivo e retorna todos os dados do arquivo cadastrado

### Gerenciamento de meetups

Para cadastrar um meetup na plataforma, o usuário deverá informar obrigatoriamente os seguintes atributos
- Título
- Descrição
- Localização
- Data/Hora
- Banner (imagem)

Não será possível cadastrar meetups com datas que já passaram.

O usuário poderá editar todos os dados de meetups que ainda não aconteceram e que ele é o organizador.

Rota para listar os meetups que são organizados pelo usuário logado.

O usuário poderá cancelar meetups organizados por ele e que ainda não aconteceram. O cancelamento deletará o meetup da base de dados.

## Inscrição no Meetup

O usuário poderá se inscrever em meetups que não organiza

O usuário não pode se inscrever em meetups que já aconteceram.

O usuário não pode se inscrever no mesmo meetup duas vezes.

O usuário não pode se increver em dois meetups que acontecem no mesmo horário.

### Listagem de Meetup

Rota que lista os meetups com filtro por data (não por hora) e os resultados vêm paginados em 10 itens por página. Segue exemplo da rota:

```
http://localhost:3333/meetups?date=2019-07-01&page=2
```

### Autenticação

Permite que um usuário se autentique utilizando e-mail e senha.

- A autenticação é feita utilizando JWT.
- É realizada a validação dos dados de entrada;

### Cadastro e atualização de usuários

Permite que novos usuários se cadastrem na aplicação utilizando nome, e-mail e senha.

Para atualizar a senha, o usuário deve também enviar um campo de confirmação com a mesma senha.

- Criptografa a senha do usuário para segurança.
- É realizada a validação dos dados de entrada;
