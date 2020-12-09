module.exports = function(app) {
    const tarefas = require('../controllers/tarefasController.js')

    app.route('/tarefas')
        .get(tarefas.listAll)
        .post(tarefas.createOne)

    app.route('/tarefas/:tarefaId')
        .get(tarefas.findOne)
        .put(tarefas.updateOne)
        .delete(tarefas.deleteOne)
}