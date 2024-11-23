const ModelCliente = require("../models/clientes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT = 12;

class ServiceCliente {
  async GetClientes() {
    return ModelCliente.findAll();
  }
  async GetClienteById(id) {
    if (!id || isNaN(id)) {
      throw new Error("Favor informar id");
    }
    const cliente = await ModelCliente.findByPk(id);
    if (!cliente) {
      throw new Error("cliente nao encontrado");
    }
    return cliente;
  }
  async CreateCliente(name, email, password) {
    if (!name || !email || !password) {
      throw new Error("favor preacher todos os dados");
    }
    const hashSenha = await bcrypt.hash(password, SALT);
    return ModelCliente.create({ name, email, password: hashSenha });
  }
  async UpdateCliente(id, name, email, password) {
    if (!id) {
      throw new Error("Favor informar o Id");
    }
    const cliente = await ModelCliente.findByPk(id);
    if (!cliente) {
      throw new Error("Cliente nao encontrado");
    }
    cliente.name = name || cliente.name;
    cliente.email = email || cliente.email;

    cliente.save();
    return cliente;
  }
  async DeleteCliente(id) {
    if (!id) {
      throw new Error("Favor informar o Id");
    }
    const cliente = await ModelCliente.findByPk(id);
    if (!cliente) {
      throw new Error("Cliente não encontrada");
    }
    return cliente.destroy();
  }
  async Login(email, password) {
    if (!email || !password) {
      throw new Error("Email ou Senha inválida");
    }

    const cliente = await ModelCliente.findOne({ where: { email } });
    if (!cliente) {
      throw new Error("Email ou Senha inválida");
    }

    const senhaValida = bcrypt.compare(password, cliente.password);
    if (!senhaValida) {
      throw new Error("Email ou Senha inválida");
    }

    const payload = {
      id: cliente.id,
      name: cliente.name,
    };

    return jwt.sign(payload, "ksszn", { expiresIn: 60 * 60 });
  }
}
module.exports = new ServiceCliente();
