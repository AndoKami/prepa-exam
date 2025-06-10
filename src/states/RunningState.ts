import GameState from './GameState';
import Game from '../Game';
import GameOverState from './GameOverState';
import Direction from '../models/Direction';
import Point from '../models/Point';

class RunningState implements GameState {
    handleInput(game: Game, input: string): void {
        switch (input.toLowerCase()) {
            case 'w': game.getSnake().setDirection(Direction.UP); break;
            case 's': game.getSnake().setDirection(Direction.DOWN); break;
            case 'a': game.getSnake().setDirection(Direction.LEFT); break;
            case 'd': game.getSnake().setDirection(Direction.RIGHT); break;
        }
    }

    update(game: Game): void {
        const snake = game.getSnake();
        const nextPosition = game.getMoveStrategy().computeNextPosition(snake, snake.getDirection());

        if (nextPosition.x < 0 || nextPosition.x >= game.getGridSize() ||
            nextPosition.y < 0 || nextPosition.y >= game.getGridSize()) {
            game.setState(new GameOverState());
            return;
        }

        if (snake.collidesWithSelf(nextPosition)) {
            game.setState(new GameOverState());
            return;
        }

        const food = game.getFood();
        const eatsFood = nextPosition.equals(food);
        snake.move(nextPosition, eatsFood);
        if (eatsFood) {
            game.setFood(game.getFoodFactory().generateFood(snake.getBody()));
            game.incrementScore();
        }
    }

    render(game: Game): void {
        console.clear();
        const gridSize = game.getGridSize();
        const snakeBody = game.getSnake().getBody();
        const food = game.getFood();

        // Render grid
        for (let y = 0; y < gridSize; y++) {
            let row = '';
            for (let x = 0; x < gridSize; x++) {
                const point = new Point(x, y);
                if (point.equals(food)) {
                    row += '@ ';
                } else if (snakeBody.some(segment => segment.equals(point))) {
                    row += '* ';
                } else {
                    row += '. ';
                }
            }
            console.log(row);
        }
        console.log(`Score: ${game.getScore()}`);
        console.log('Enter direction (W: Up, S: Down, A: Left, D: Right):');
    }
}

export default RunningState;