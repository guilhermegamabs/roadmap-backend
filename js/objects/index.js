const pessoa = {
  firstName: "Guilherme",
  lastName: "Gama",
  age: 19,
  falarNome: function () {
    return `${this.firstName} está falando seu nome!`;
  },
  getDataNascimento: function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.age;
  },
};

// delete pessoa.firstName;

console.log(pessoa[`firstName`]);
console.log(pessoa.lastName);
console.log(pessoa.falarNome());
console.log(pessoa.getDataNascimento())

console.log(`\n**************************************\n`)

for(let chave in pessoa) {
    console.log(chave)
}