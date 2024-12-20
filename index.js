const readline = require('readline');

class Personagem {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }


    ataque() {
        return `Personagem: ${this.nome}, Idade: ${this.idade}, Tipo: ${this.tipo}, Elemento: ${this.elemento}`;
    }
}

class Mago extends Personagem{
    congurarMagia(){
        return `${this.nome} ataca usando sua magia!`;
    }
}

class Guerreiro extends Personagem{
    espadada(){
        return `${this.nome} ataca usando sua espada!`;
    }
}

class Monge extends Personagem{
    artesMarciais(){
        return `${this.nome} ataca usando seu golpe Mortal`;
    }
}

class Ninja extends Personagem{
    shuriken(){
        return `${this.nome} ataca usando sua shuriken`;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual é o nome do personagem? ', (nome) => {
    rl.question('Qual é a idade do personagem? ', (idadeEntrada) => {
        const idade = parseInt(idadeEntrada);

        if (isNaN(idade)) {
            console.log("Idade inválida. Por favor, insira um número.");
            rl.close();
            return;
        }

        rl.question('Escolha o tipo de personagem (Mago, Guerreiro, Monge ou Ninja): ', (tipoEntrada) => {
            const tipo = tipoEntrada.toLowerCase();

            if (tipo === 'mago') {
                personagem = new Mago(nome, idade, "Mago");
                console.log(personagem.congurarMagia());
            } else if (tipo === 'guerreiro') {
                personagem = new Guerreiro(nome, idade, "Guerreiro");
                console.log(personagem.espadada());
            } else if (tipo === 'monge') {
                personagem = new Monge(nome, idade, "Monge");
                console.log(personagem.artesMarciais());
            } else if (tipo === 'ninja') {
                personagem = new Ninja(nome, idade, "Ninja");
                console.log(personagem.shuriken());
            } else {
                console.log("Tipo de personagem inválido. Tente novamente.");
            }
            rl.close();
        });
    });
});