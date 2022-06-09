const Filme = require("../models/Filmes");//trazendo o filme que está cadastrado os dados na tabela no meu banco de dados do arquivo Filmes.js
let message = "";//linha importante caso der errado

const getAll = async (req, res) => {//async, aguarda porque eu vou lá fazer a consulta espere as ações para renderizar a página
    try{//tente por esse caminho se der certo
        const filmes = await Filme.findAll();//aguardando
        res.render("index",{
            filmes,//guardando os filmes
            filmesPut: null,//por filme ele não precisa troca o id
            filmesDel: null,
            message,// passando mensagem para o usuário se tá tudo certo
        });
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};

//rota para pegar o ID do filme selecionado
const getById = async (req,res) => {
    try{
        const filme = await Filme.findByPk(req.params.id);//encontrando o filme que foi escolhido pelo id, findByPk procurar pela chave primaria que é o id, e esse id vai chegar por parametro
        res.render("detalhes", {
            filme
        });
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};

module.exports = {//exportando todas as rotas que a gente usar qui
    getAll,
    getById
}

