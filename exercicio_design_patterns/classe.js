class Game{
    constructor(nome,data_lancamento,genero){
         this.nome = nome;
         this.data_lancamento = data_lancamento;
         this.genero = genero;

    }

    getNome(){
        return this.nome;
    }

    getDataLanc(){
        return this.data_lancamento;
    }

    getGenero(){
        return this.genero;
    }
}

const game1 = new Game('Fortnite','21 de julho de 2017','Battle Royale')
const game2 = new Game('Resident Evil 4','11 de janeiro de 2005','Terror')
console.log(game1)
console.log(game2)