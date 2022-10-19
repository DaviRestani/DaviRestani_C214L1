const { CarModel } = require('../src/infrastructure/database');
const car = require('../src/port/car_repository');

describe('create', () => {
    it('Valid Car', async () => {
        CarModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                nome: "Fiesta",
                tipo: "Manual",
                fabricante: "Ford",
                ano: "2014",
            }),
        }));

        expect(await car.create({
            id: 1,
            nome: "Fiesta",
            tipo: "Manual",
            fabricante: "Ford",
            ano: "2014"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nome: expect.any(String),
                tipo: expect.any(String),
                fabricante: expect.any(String),
                ano: expect.any(Number)
            }),
        );
    });
});