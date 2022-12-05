import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player:Fighter;
  private _enemies: SimpleFighter[];

  constructor(player: Fighter, enemies :SimpleFighter[]) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  enemyAttack(): void {
    this._enemies.forEach((enemy) => enemy.attack(this._player));
  }

  playerAttack(): void {
    this._enemies.forEach((enemy) => this._player.attack(enemy));
  }

  fight(): number {
    this.playerAttack();
    this.enemyAttack();
    if (this._player.lifePoints === -1) return -1;
    if (this._enemies.every((enemy) => enemy.lifePoints === -1)) return 1;
    return this.fight();
  }
}

export default PVE;