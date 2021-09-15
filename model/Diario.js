const conexao = require('../infra/conexao')

class Diario {
    listar(res){
        const sql = "SELECT * FROM Diario"
        conexao.query(sql, (erro, resultados) => {
            if (erro){
                console.log("executando query - nok")
                res.status(400).json(erro)
            } else {
                console.log("executando query - ok")
                res.status(200).json(resultados)
            }
        })
    }

    incluir(){

    }
    excluir(){

    }
}
module.exports = new Diario