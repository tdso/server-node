const Arquivo = require('../model/Arquivo')

const service = {
    insertArquivo: (arquivo, res) => {
        //valida o arquivo
        Arquivo.insert(arquivo, res)
    },
    deleteArquivo: (id, res) => {
        console.log("service delete")
    },
    listaArquivos: (res) => {
        Arquivo.listAll(res)
    }
}

module.exports = service