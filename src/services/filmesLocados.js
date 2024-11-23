const ModelFilmeLocado = require("../models/filmesLocados");
const ServiceFilme = require("./filmes");
const ServiceCliente = require("./clientes");

class ServiceFilmeLocado {
  async GetLocados() {
    return ModelFilmeLocado.findAll();
  }
  async GetLocadoById(id) {
    if (!id || isNaN(id)) {
      throw new Error("Favor informar o Id");
    }
    return ModelFilmeLocado.findByPk(id);
  }
  async GetLocadoByCliente(idCliente) {
    if (!idCliente || isNaN(idCliente)) {
      throw new Error("Favor informar o Id");
    }
    ServiceCliente.GetClienteById(idCliente);

    return ModelFilmeLocado.findAll({ where: { idCliente } });
  }
  async Locar(idFilme, idCliente, dataLocacao) {
    if (!idFilme || !idCliente || !dataLocacao) {
      throw new Error("informe todas as informações");
    }
    ServiceFilme.GetFilmeById(idFilme);
    ServiceCliente.GetClienteById(idCliente);
    return ModelFilmeLocado.create({ idFilme, idCliente, dataLocacao });
  }
  async Devolver(id, dataDevolucao) {
    if (!id || isNaN(id)) {
      throw new Error("Favor informar o Id");
    }
    if (!dataDevolucao) {
      throw new Error("Favor informar a data");
    }
    const filmeLocado = await ModelFilmeLocado.findByPk(id);
    if (!filmeLocado) {
      throw new Error("locação não encontrada");
    }
    filmeLocado.dataDevolucao = dataDevolucao;
    filmeLocado.save();
    return filmeLocado;
  }
}

module.exports = new ServiceFilmeLocado();
