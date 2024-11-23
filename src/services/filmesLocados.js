const ModelFilmeLocado = require("../models/filmesLocados");

class ServiceFilmeLocado {
  async Locar(idFilme, idCliente, dataLocacao) {
    if (!idFilme || !idCliente || !dataLocacao) {
      throw new Error("informe todas as informações");
    }
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
