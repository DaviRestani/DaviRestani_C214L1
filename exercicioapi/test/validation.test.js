const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Vingadores Ultimato",
        genero: "Aventura",
        tempo: "3 horas"
    });
    expect(result).toEqual(undefined);
});

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Top Gun: Maverick",
        genero: "Ação",
        tempo: "2 horas"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        genero: "Terror",
        tempo: "1 hora e meia"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o especificar o tempo', () => {
    const result = Validation.create({
        nome:"O Telefone Preto",
        genero: "Terror"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});