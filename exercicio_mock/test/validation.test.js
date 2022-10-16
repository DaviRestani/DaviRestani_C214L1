const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Palio",
        tipo: "Manual",
        fabricante: "Fiat",
        ano: 2010
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        tipo: "Automático",
        fabricante: "Honda",
        ano: 2017
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
