import Point from '../models/Point';
import Direction from '../models/Direction';

class Snake {
    private body: Point[] = [];
    private direction: Direction;

    constructor(initialPosition: Point, initialDirection: Direction, initialLength: number) {
        this.direction = initialDirection;
        this.body.push(initialPosition);
        for (let i = 1; i < initialLength; i++) {
            this.grow();
        }
    }

    move(nextPosition: Point, grow: boolean = false): void {
        this.body.unshift(nextPosition);
        if (!grow) {
            this.body.pop();
        }
    }

    grow(): void {
        const tail = this.body[this.body.length - 1];
        this.body.push(tail);
    }

    collidesWithSelf(nextPosition: Point): boolean {
        return this.body.some(segment => segment.equals(nextPosition));
    }

    getHead(): Point {
        return this.body[0];
    }

    getBody(): Point[] {
        return [...this.body];
    }

    setDirection(direction: Direction): void {
        if ((this.direction === Direction.UP && direction !== Direction.DOWN) ||
            (this.direction === Direction.DOWN && direction !== Direction.UP) ||
            (this.direction === Direction.LEFT && direction !== Direction.RIGHT) ||
            (this.direction === Direction.RIGHT && direction !== Direction.LEFT)) {
            this.direction = direction;
        }
    }

    getDirection(): Direction {
        return this.direction;
    }
}

export default Snake;