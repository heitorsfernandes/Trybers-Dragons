import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static _instances = 0;
  private _energy: EnergyType;
  
  constructor(name:string) {
    super(name);
    Ranger._instances += 1;
    this._energy = 'stamina';
  }
  
  static createdArchetypeInstances():number {
    return Ranger._instances;
  }
    
  get energyType():EnergyType { return this._energy; } 
}

export default Ranger;