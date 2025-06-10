import GameState from './GameState';
import Game from '../Game';
import MenuState from './MenuState';

class GameOverState implements GameState {
    handleInput(game: Game, input: string): void {
        if (input.toLowerCase() === 'r') {
            game.reset();
            game.setState(new MenuState());
        }
    }

    update(game: Game): void {}

    render(game: Game): void {
        console.clear();
        console.log('=== GAME OVER ===');
        console.log(`Final Score: ${game.getScore()}`);
        console.log('Press R to restart');
    }
}

export default GameOverState;