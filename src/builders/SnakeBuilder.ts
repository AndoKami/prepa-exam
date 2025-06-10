import Point from '../models/Point';
import Direction from '../models/Direction';
import Snake from '../entities/Snake';

class SnakeBuilder {
    private position: Point = new Point(5, 5);
    private direction: Direction = Direction.RIGHT;
    private length: number = 3;

    setPosition(x: number, y: number): SnakeBuilder {
        this.position = new Point(x, y);
        return this;
    }

    setDirection(direction: Direction): SnakeBuilder {
        this.direction = direction;
        return this;
    }

    setLength(length: number): SnakeBuilder {
        this.length = length;
        return this;
    }

    build(): Snake {
        return new Snake(this.position, this.direction, this.length);
    }
}

export default SnakeBuilder;