require('dotenv').config();//envio das informações do banco faz a comunicação com o banco, mas tem que baixar a estenção
const express = require("express");// chamar o express para o nosso projeto
const path = require("path");// dá o caminho para consultar express, node-modules
const app = express();// criando a aplicação
const routes = require("./src/routes/routes");//mostrando onde nossas rotas estão

app.set("view engine", "ejs");//informando nossa engine o EJS
app.use(express.urlencoded());//o navedar vai enviar as informações por json e essas informações vem do body. É ele que vai pegar as informações pelo input e é criado o json
app.use(express.static(path.join(__dirname, "public")));//dá o caminho da nossa pasta PUBLIC
app.use(routes);// usas as rotas 

//a porta que roda nosso projeto
const port = process.env.PORT || 3000;// informa que ele ou está rodando no localhost 3000 ou outra porta

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));// para a gente ver o servidor rodando em http: 

