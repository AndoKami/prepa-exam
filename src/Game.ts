import * as readline from 'readline';
import Point from './models/Point';
import Direction from './models/Direction';
import Snake from './entities/Snake';
import FoodFactory from './factories/FoodFactory';
import MoveStrategy from './strategies/MoveStrategy';
import DefaultMoveStrategy from './strategies/DefaultMoveStrategy';
import GameState from './states/GameState';
import MenuState from './states/MenuState';
import SnakeBuilder from './builders/SnakeBuilder';

class Game {
    private gridSize: number = 10;
    private snake: Snake;
    private food: Point;
    private foodFactory: FoodFactory;
    private moveStrategy: MoveStrategy;
    private currentState: GameState;
    private score: number = 0;
    private rl: readline.Interface;

    constructor() {
        this.foodFactory = new FoodFactory(this.gridSize);
        this.snake = new SnakeBuilder().build();
        this.food = this.foodFactory.generateFood(this.snake.getBody());
        this.moveStrategy = new DefaultMoveStrategy();
        this.currentState = new MenuState();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    start(): void {
        this.gameLoop();
    }

    private gameLoop(): void {
        this.currentState.render(this);
        this.rl.question('', (input) => {
            this.currentState.handleInput(this, input);
            this.currentState.update(this);
            this.gameLoop();
        });
    }

    setState(state: GameState): void {
        this.currentState = state;
    }

    getSnake(): Snake {
        return this.snake;
    }

    getFood(): Point {
        return this.food;
    }

    setFood(food: Point): void {
        this.food = food;
    }

    getFoodFactory(): FoodFactory {
        return this.foodFactory;
    }

    getMoveStrategy(): MoveStrategy {
        return this.moveStrategy;
    }

    getGridSize(): number {
        return this.gridSize;
    }

    getScore(): number {
        return this.score;
    }

    incrementScore(): void {
        this.score += 1;
    }

    reset(): void {
        this.snake = new SnakeBuilder().build();
        this.food = this.foodFactory.generateFood(this.snake.getBody());
        this.score = 0;
    }
}

export default Game;