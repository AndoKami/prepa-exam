import Snake from '../entities/Snake';
import Direction from '../models/Direction';
import Point from '../models/Point';

interface MoveStrategy {
    computeNextPosition(snake: Snake, direction: Direction): Point;
}

export default MoveStrategy;