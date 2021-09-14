const conexao = require('../infra/conexao')

class Diario {
    listar(res){
        const sql = "SELECT * FROM Diario"
        conexao.query(sql, (erro, resultados) => {
            if (erro){
                res.status(400).json(erro)
            } else {
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