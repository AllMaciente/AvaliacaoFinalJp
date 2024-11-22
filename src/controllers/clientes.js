const ServiceCliente = require("../services/clientes");

class ControllerCliente {
  async GetClients(req, res) {
    try {
      const clientes = await ServiceCliente.GetClientes();
      res.send({ msg: clientes });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async GetClienteById(req, res) {
    try {
      const id = req.params.id;
      const cliente = await ServiceCliente.GetCliente(id);
      res.send({ msg: cliente });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async CreateCliente(req, res) {
    try {
      const { name, email, password } = req.body;
      const cliente = await ServiceCliente.CreateCliente(name, email, password);
      res.send({ msg: cliente });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async UpdateCliente(req, res) {
    try {
      const id = req.params.id;

      const { name, email, password } = req.body;
      const cliente = await ServiceCliente.UpdateCliente(
        id,
        name,
        email,
        password
      );
      res.send({ msg: cliente });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async DeleteCliente(req, res) {
    try {
      const id = req.params.id;

      await ServiceCliente.DeletePessoa(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}

module.exports = new ControllerCliente();
