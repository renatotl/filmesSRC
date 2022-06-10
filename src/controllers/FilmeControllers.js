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

//rota para pegar o ID do filme selecionado// async é quando ela vai lá no banco e volta
const getById = async (req,res) => {// toda função ou vai dá certo ou vai dá errado ai usamos o TRY e CATCH
    try{// AWAIT ela vai receber os dados que estao em Filme e procurando a chave primária requisitando o parâmetro do ID
        const filme = await Filme.findByPk(req.params.id);//encontrando o filme que foi escolhido pelo id, findByPk procurar pela chave primaria que é o id, e esse id vai chegar por parametro
        res.render("detalhes", {
            filme
        });
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};
//rota de criação do filme
const criar = (req,res ) => {
    try{
        res.render("criar", {message});
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};
const criacao  = async (req,res) =>{
    try{
        const filme = req.body;//a requisição que vem do body, pegando os dados que vem do body
        if(
            !filme.nome ||
            !filme.descricao ||
            !filme.imagem
        ){
            message = "Preencha todos os campos para cadastro!"
            type = "danger";
            return res.redirect("/criar");
        }
        await Filme.create(filme);//model filme e cria o filme que chegou, async espera essa transação
        res.redirect("/");
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};

//rota editar filme
const editar1 = async (req,res) => {// a editar1 ve se o filme existe não valida a rota 
    const filme = await Filme.findByPk(req.params.id);

    if(!filme){
        res.render("editar", {
            message: "Filme não foi encontrado!"
        });
    }
    res.render("editar",{
        filme,
        message:"",
    });
};

//rota de edição do filme
const editar = async (req,res) => {// realmente edita o filme 
    try{
        //peguei o ID que vem do body e comparei com ID da chave primária do meu banco
        const filme = await Filme.findByPk(req.params.id);
        const {nome, descricao, imagem } = req.body;// desconstruindo o objeto para poder editar cada um

        filme.nome = nome;// passando o novo valor
        filme.descricao = descricao;
        filme.imagem = imagem;



        //salvando no banco o SAVE salva direto no banco o filme que vem do body
        const filmeEditado = await filme.save();
        // res.render("editar", {
        //     filme: filmeEditado,// pegou o filme que editei e passou o filmeEditado
        //     message:"Filme editado com sucesso!",
        // });
        res.redirect("/");
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};

//rota deletar o filme
const deletar = async (req,res) => {
    try{//o destoy é uma função // vai lá no banco e destrua i ID que vem do body
        await Filme.destroy({where : { id: req.params.id}});// o Where aponta pro ID o req.params.id é o ID que vem do body
        message = "Filme removido com sucesso"
        res.redirect("/");
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
}

module.exports = {//exportando todas as rotas que a gente usar qui po routes
    getAll,
    getById,
    criar,
    criacao,
    editar1,
    editar,
    deletar
}

