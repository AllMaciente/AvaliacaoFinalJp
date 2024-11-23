const ServiceFilmeLocado = require("../services/filmesLocados");

class ControllerFilmeLocado {
  async GetLocados(req, res) {
    try {
      const locados = await ServiceFilmeLocado.GetLocados();
      res.status(200).send({ msg: locados });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
  async GetLocadoById(req, res) {
    try {
      const id = req.params.id;
      const locado = await ServiceFilmeLocado.GetLocadoById(id);
      res.status(200).send({ msg: locado });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
  async GetLocadoByCliente(req, res) {
    try {
      const idCliente = req.params.idCliente;
      const locado = await ServiceFilmeLocado.GetLocadoByCliente(idCliente);
      res.status(200).send({ msg: locado });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
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
