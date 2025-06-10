import Game from '../Game';

interface GameState {
    handleInput(game: Game, input: string): void;
    update(game: Game): void;
    render(game: Game): void;
}

export default GameState;