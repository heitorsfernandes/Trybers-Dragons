import Race from './Race';

class Elf extends Race {
  static _instances = 0;
  _maxLifePoints:number;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;