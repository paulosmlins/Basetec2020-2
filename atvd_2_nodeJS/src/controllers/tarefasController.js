const Tarefa = require("../models").Tarefa;

exports.listAll = (req, res) => {
  Tarefa.findAll()
    .then((tarefas) => {
      res.send(tarefas);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.createOne = (req, res) => {
  const { descricao, status } = req.body;

  const data_criacao = new Date();

  const isValid = validate(status);

  if (isValid) {
    Tarefa.create({ descricao, data_criacao, status })
      .then((tarefas) => {
        res.send(tarefas);
      })
      .catch((error) => {
        res.send(error);
      });
  } else {
    res.status(400).send("Não é possível criar um registro com esse status.");
  }
};

exports.findOne = (req, res) => {
  const id = req.params.tarefaId;

  Tarefa.findOne({ where: { id: id } })
    .then((tarefa) => {
      if (!tarefa) {
        res.status(404).send({
          message: "Tarefa não encontrada",
        });
      }
      res.status(200).send(tarefa);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.updateOne = (req, res) => {
  const id = req.params.tarefaId;
  const { descricao, status } = req.body;

  const isValid = validate(status);

  if (isValid) {
    Tarefa.update(
      { descricao: descricao, status: status },
      {
        where: { id: id },
      }
    )
      .then((tarefa) => {
        if (!tarefa) {
          res.status(404).send({
            message: "Tarefa não encontrada",
          });
        }

        res.status(200).send("Tarefa de alterada com sucesso.");
      })
      .catch((error) => {
        res.send(error);
      });
  } else {
    res
      .status(400)
      .send("Não é possível atualizar um registro com esse status.");
  }
};

const validate = (reqStatus) => {
  const status = reqStatus.toLowerCase();

  if (status == "pendente" || status == "andamento" || status == "concluida") {
    return true;
  } else {
    return false;
  }
};

exports.deleteOne = async (req, res) => {
  const id = req.params.tarefaId;

  Tarefa.destroy({
    where: { id: id },
  })
    .then((tarefa) => {
      if (!tarefa) {
        res.status(404).send({
          message: "Tarefa não encontrada",
        });
      }
      res.status(200).send("Tarefa de id: " + id + " apagada com sucesso.");
    })
    .catch((error) => {
      res.send(error);
    });
};
