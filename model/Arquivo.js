const conexao = require('../infra/conexao')

class Arquivo {
    Arquivo() {
        this.conexao = conexao
    }
    insert(arquivo, res) {
        const sql = "INSERT INTO Arquivos SET ?"
        conexao.query(sql, [arquivo], (erro, result) => {
            if (erro) {
                console.log("Erro ao inserir arquivo no BD - arquivo.js")
                res.status(400).json(erro);
            } else {
                console.log("arquivo atualizado no bd")
                res.status(200).json(result)
            }

        })
    }
    listAll(res) {
        const sql = "SELECT * FROM Arquivos"
        conexao.query(sql, (erro, result) => {
            if (erro) {
                console.log("Erro ao buscar arquivos no BD - arquivo.js")
                res.status(400).json(erro);
            } else {
                console.log("arquivo buscado no bd")
                res.status(200).json(result)
            }

        })
    }
}
module.exports = new Arquivo()


