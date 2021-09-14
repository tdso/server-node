const Diario = require('../model/Diario')

const service = {

    getAllDiario: (res) => {
        console.log('service getAllDiario')
        // valida os dados da requisição
        // faz algum processamento
        // chama o servico DAO
        Diario.listar(res)
        // devolve a resposta
    }

};

module.exports = service



