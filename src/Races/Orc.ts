import Race from './Race';

class Orc extends Race {
  static _instances = 0;
  _maxLifePoints:number;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;