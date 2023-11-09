function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
};

// instância

const p1 = new Pessoa("Guilherme", "Gama");
const p2 = new Pessoa("Maria", "Clara");

console.log(p1.nomeCompleto());
