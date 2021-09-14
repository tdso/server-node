const service = require('../service/DiarioService')

const rotas = app => {
    app.get('/diario', (req,res) => {
        console.log('get all rest')
        service.getAllDiario(res);
        res.status(200).json("ok")
    })

    app.get('/diario/:id', (req,res) => {
        console.log('get id rest')
        console.log('id param = ', req.params)
        res.status(200).json("ok")
    })

    app.post('/diario', (req,res) => {
        console.log('post rest')
        res.status(200).json("ok")
    })

    app.delete('/diario/:id', (req,res) => {
        console.log('delete rest')
        console.log('id param = ', req.params())
        res.status(200).json("ok")
    })

}

module.exports = rotas