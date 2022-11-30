import Race from './Race';

class Halfling extends Race {
  static _instances = 0;
  _maxLifePoints:number;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;