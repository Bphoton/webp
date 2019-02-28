import { Game, Piece } from './rps'
const { Rock, Scissors, Paper, Lizard } = Piece

let game = new Game()
test('Rock beats Scissors', () => {
    let result = game.compare(Rock, Scissors)
    expect(result).toBe(1)
})

test('Rock beats Lizard', () => {
    let result = game.compare(Rock, Lizard)
    expect(result).toBe(1)
})

test('Scissors beats Lizard', () => {
    let result = game.compare(Scissors, Lizard)
    expect(result).toBe(1)
})