import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  special?(enemy: SimpleFighter): void;
  levelUp(): void;
}

export default Fighter;