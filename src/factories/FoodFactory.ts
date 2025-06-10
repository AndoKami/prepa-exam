import Point from '../models/Point';

class FoodFactory {
    constructor(private gridSize: number) {}

    generateFood(snakeBody: Point[]): Point {
        let food: Point;
        do {
            const x = Math.floor(Math.random() * this.gridSize);
            const y = Math.floor(Math.random() * this.gridSize);
            food = new Point(x, y);
        } while (snakeBody.some(segment => segment.equals(food)));
        return food;
    }
}

export default FoodFactory;