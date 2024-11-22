const ServiceFilme = require("../services/filmes");

class ControllerFilme {
  async GetFilmes(req, res) {
    try {
      const filmes = await ServiceFilme.GetFilmes();
      res.send({ msg: filmes });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async GetFilmeById(req, res) {
    try {
      const id = req.params.id;
      const filme = await ServiceFilme.GetFilmeById(id);
      res.send({ msg: filme });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async CreateFilme(req, res) {
    try {
      const { titulo, classificacaoIndicativa, diretor } = req.body;
      const filme = await ServiceFilme.CreateFilme(
        titulo,
        classificacaoIndicativa,
        diretor
      );
      res.send({ msg: filme });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async UpdateFilme(req, res) {
    try {
      const id = req.params.id;

      const { titulo, classificacaoIndicativa, diretor } = req.body;
      const filme = await ServiceFilme.UpdateFilme(
        id,
        titulo,
        classificacaoIndicativa,
        diretor
      );
      res.send({ msg: filme });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async DeleteFilme(req, res) {
    try {
      const id = req.params.id;

      await ServiceFilme.DeleteFilme(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}

module.exports = new ControllerFilme();
