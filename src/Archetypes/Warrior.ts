import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static _instances = 0;
  private _energy: EnergyType;
  
  constructor(name:string) {
    super(name);
    Warrior._instances += 1;
    this._energy = 'stamina';
  }
  
  static createdArchetypeInstances():number {
    return Warrior._instances;
  }
    
  get energyType():EnergyType { return this._energy; } 
}

export default Warrior;