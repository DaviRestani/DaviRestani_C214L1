class Veiculo{
    #placa;
    #ano;

    constructor(placa, ano){
        this.#placa = placa;
        this.#ano = ano;
    }

    setplaca(NovaPlaca){
        this.#placa = NovaPlaca;
    }

    setAno(NovoAno){
        this.#ano = NovoAno;
    }

    get placa(){
        return this.#placa;
    }

    get ano(){
        return this.#ano;
    }
    
    exibirDados(){
        console.log("Placa: ", this.placa);
        console.log("Ano: ", this.ano);
    }
}

class Caminhao extends Veiculo{
    #eixos = [];

    constructor(placa, ano, eixos){
        super(placa, ano);
        this.#eixos = eixos;
    }

    setEixos(NovoEixos){
        this.#eixos = NovoEixos;
    }

    get eixos(){
        return this.#eixos;
    }

    exibirDados(){
        console.log("Placa: ", this.placa);
        console.log("Ano: ", this.ano);
        console.log("Eixos: ", this.eixos);
    }
    }

class Onibus extends Veiculo{
    #assentos;

    constructor(placa,ano,assentos){
        super(placa, ano);
        this.#assentos = assentos;
    }

    get assentos(){
        return this.#assentos;
    }
    
    set assentos(assentos){
        this.#assentos = assentos;
    }

    exibirdados(){
        console.log("Placa: ", this.placa);
        console.log("Ano: ", this.ano);
        console.log(this.#assentos);
    }

}

// Testes da atividade

console.log("Caminhao")
let caminhao = new Caminhao("ABC-1234", "2020", 4);
caminhao.exibirDados();


console.log("Onibus")
let onibus = new Onibus("DEF-5678", "2019", 120);
onibus.exibirdados();


