const ServiceFilmeLocado = require("../services/filmesLocados");

class ControllerFilmeLocado {
  async Locar(req, res) {
    try {
      const { idFilme, idCliente, dataLocacao } = req.body;
      const locado = await ServiceFilmeLocado.Locar(
        idFilme,
        idCliente,
        dataLocacao
      );
      res.status(200).send({ msg: locado });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
  async Devolver(req, res) {
    try {
      const id = req.params.id;
      const { dataDevolucao } = req.body;
      const devolucao = ServiceFilmeLocado.Devolver(id, dataDevolucao);
      res.status(200).send({ msg: devolucao });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}

module.exports = new ControllerFilmeLocado();
