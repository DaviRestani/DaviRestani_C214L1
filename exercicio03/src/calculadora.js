const Calculadora = {
    adicao(soma) {
        const validateSoma = validate({ soma },  SomaConstraint.somaConstraint);        
        if(validateSoma !== undefined){
            return 'Error';
        }
        let soma = a + b;
        return soma;
    },

    subtracao(subtracao) {
        const validateSub = validate({ subtracao },  SubtracaoConstraint.subtracaoConstraint);
        if(validateSub !== undefined){
            return 'Error';
        }
        let sub = a - b;
        return sub;
    },

    multiplicacao(multiplicacao) {
        const validatemult = validate({ multiplicacao },  MultiplicacaoConstraint.multiplicacaoConstraint);
        if(validateSub !== undefined){
            return 'Error';
        }
        let mult = a * b;
        return mult;
    },

    divisao(divisao) {
        const validateDiv = validate({ divisao },  DivisaoConstraint.divisaoConstraint);
        if(validateDiv !== undefined){
            return 'Error';
        }
        let div = a / b;
        return div;
    },

    potenciacao(potencia) {
        const validatePot = validate({ potenciacao },  PotenciacaoConstraint.potenciacaoConstraint);
        if(validatePot !== undefined){
            return 'Error';
        }
        let pot = a ** b;
        return pot;
    }

};

module.exports = Calculadora;