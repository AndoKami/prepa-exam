import MoveStrategy from './MoveStrategy';
import Snake from '../entities/Snake';
import Direction from '../models/Direction';
import Point from '../models/Point';

class DefaultMoveStrategy implements MoveStrategy {
    computeNextPosition(snake: Snake, direction: Direction): Point {
        const head = snake.getHead();
        switch (direction) {
            case Direction.UP: return new Point(head.x, head.y - 1);
            case Direction.DOWN: return new Point(head.x, head.y + 1);
            case Direction.LEFT: return new Point(head.x - 1, head.y);
            case Direction.RIGHT: return new Point(head.x + 1, head.y);
            default: return head;
        }
    }
}

export default DefaultMoveStrategy;