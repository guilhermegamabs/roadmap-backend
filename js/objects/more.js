// Factory Functions / Constructor Functions

// Factory Function:
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Guilherme', 'Gama')
console.log(p1.nomeCompleto())

// Constructor Function:
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Guilherme', 'Gama');
