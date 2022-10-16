const { expect } = require('chai');
const { UserModel } = require('../src/infrastructure/database');
const user = require('../src/port/user_repository');

describe('create', () => {
    it('Valid User', async () => {
        UserModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                nome: "Fiesta",
                tipo: "Manual",
                fabricante: "Ford",
                ano: "2014",
            }),
        }));

        expect(await user.create({
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