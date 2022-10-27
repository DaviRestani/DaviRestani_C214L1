const Game = (nome, data_lancamento, genero) => ({
    nome,
    data_lancamento,
    genero,
    getData: () => ({nome,data_lancamento,genero})
})


const game1 = Game('Fortnite','21 de julho de 2017','Battle Royale')
const game2 = Game('Resident Evil 4','11 de janeiro de 2005','Terror')
console.log(game1)
console.log(game2)