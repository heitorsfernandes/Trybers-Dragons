import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static _instances = 0;
  private _energy: EnergyType;
  
  constructor(name:string) {
    super(name);
    Mage._instances += 1;
    this._energy = 'mana';
  }
  
  static createdArchetypeInstances():number {
    return Mage._instances;
  }
    
  get energyType():EnergyType { return this._energy; } 
}

export default Mage;