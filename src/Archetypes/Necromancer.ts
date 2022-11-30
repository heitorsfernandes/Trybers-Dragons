import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static _instances = 0;
  private _energy: EnergyType;
  
  constructor(name:string) {
    super(name);
    Necromancer._instances += 1;
    this._energy = 'mana';
  }
  
  static createdArchetypeInstances():number {
    return Necromancer._instances;
  }
    
  get energyType():EnergyType { return this._energy; } 
}

export default Necromancer;