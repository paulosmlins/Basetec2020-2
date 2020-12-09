const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./src/routes/tarefasRoutes.js')

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.route('/')
.get((req, res) => {
    res.send('Work fine!')
})

const port = process.env.PORT || 3000

 app.listen(port)

 console.log('Servidor rodando na porta ' + port)