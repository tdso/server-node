const app = require('./server/customServer')
const conexao = require('./infra/conexao')

const criaTabelas = require('./infra/scriptdb')
conexao.connect(erro => {
    if (erro) {
        console.log("erro na conexao com o BD - index.js ")
    } else {
        criaTabelas.init(conexao)
        app.listen(3000, () => console.log("server rodando - port 3000"))
    }
})




