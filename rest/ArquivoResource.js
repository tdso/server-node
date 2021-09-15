const service = require("../service/ArquivoService")

const rotas = (app) => {
    app.post("/upload", (req, res) => {
        const arquivo = req.body
        service.insertArquivo(arquivo, res)
    })
    app.get("/upload", (req, res) => {
        service.listaArquivos(res)
    })
}
module.exports = rotas;