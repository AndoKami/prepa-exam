import GameState from './GameState';
import Game from '../Game';
import RunningState from './RunningState';

class MenuState implements GameState {
    handleInput(game: Game, input: string): void {
        if (input.toLowerCase() === 's') {
            game.setState(new RunningState());
        }
    }

    update(game: Game): void {}

    render(game: Game): void {
        console.clear();
        console.log('=== SNAKE GAME ===');
        console.log('Press S to start');
    }
}

export default MenuState;