const ModelFilme = require("../models/filmes");

class ServiceFilme {
  async GetFilmes() {
    return ModelFilme.findAll(); // Usa diretamente o modelo exportado
  }
  async GetFilmeById(id) {
    if (!id || isNaN(id)) {
      throw new Error("Favor informar o Id");
    }
    const filme = await ModelFilme.findByPk(parseInt(id));
    if (!filme) {
      throw new Error("filme nao encontrado");
    }
    return filme;
  }
  async CreateFilme(titulo, classificacaoIndicativa, diretor) {
    if (!titulo || !classificacaoIndicativa || !diretor) {
      throw new Error("informe todas as informações");
    }
    return ModelFilme.create({ titulo, classificacaoIndicativa, diretor });
  }
  async UpdateFilme(id, titulo, classificacaoIndicativa, diretor) {
    if (!id || isNaN(id)) {
      throw new Error("Favor informar o Id");
    }
    const filme = await ModelFilme.findByPk(parseInt(id));
    if (!filme) {
      throw new Error("filme nao encontrado");
    }
    filme.titulo = titulo || filme.titulo;
    filme.classificacaoIndicativa =
      classificacaoIndicativa || filme.classificacaoIndicativa;
    filme.diretor = diretor || filme.diretor;

    filme.save();
    return filme;
  }
  async DeleteFilme(id) {
    if (!id || isNaN(id)) {
      throw new Error("Favor informar o Id");
    }
    const filme = await ModelFilme.findByPk(parseInt(id));
    if (!filme) {
      throw new Error("filme não encontrada");
    }
    return filme.destroy();
  }
}
module.exports = new ServiceFilme();
