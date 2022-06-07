# filmesSRC

passo 1: index.js na matris
poasso 2: public com css e js
passo 3: views com o index.ejs
passo 4: criar a pasta SRC na matris com as 4 pastss dentro CONTROLLERS, DATABASE, MODELS, ROUTES.
passo 4: npm init -y para preenchimento outomático ou npm init para manual
passo 5: npm install nodemon --save--dev
passo 6: alterar o script no package.json
 "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  passo7: npm install express --save /com o save ele está salvo alocado 
  passo8: npm install --save ejs
  passo9: o nosso INDEX.JS na matris já foi configurado de forma correta.
  passo10: routes.js configurado
  passo11: FilmeController é onde a gente controla a rota

  passo12: no PGadimn em Database foi criado uma nova tabela chamada FILMES
  Em filmes abri QUERYTOOL
---
  create table filme(
id integer not null generated always as identity,
nome character(50) not null,
descricao character (1000) not null,
imagem character (1000) not null,
	primary key (id)
)


insert into filme (nome,descricao,imagem)
values ('Harry Potter e a Pedra Filosofal', 'o filme do harry potter','https://www.ingresso.com/filme/harry-potter-e-a-pedra-filosofal')


insert into filme (nome,descricao,imagem)
values ('Senhor dos Anéis: As Duas Torres', 'o filme do sr, dos anéis','https://br.web.img2.acsta.net/medias/nmedia/18/92/34/89/20194741.jpg')

em tabel filmes botão direito e view edit data



finalizado o banco de dados


passo13: na matris criar arquivo .env(conectr com o banco) e um   .env.exemple(quem quiser baixar e saber como usamos as variáveis) 


dentro do aequivo.env foi copiado igual ado prof

congigurando o .env   1 nome do banco que fizemos lá no postgree 2 nome do postgree 3 senha 4 localhost

passo14: npm i dotenv

passo15: npm install sequelize pg pg-hstore   ele que faz a conexão com o pgadmin

passo16: arquivo bd.js em database
passo17: filmes.js em models


passo18: na rais arquivo procfile





