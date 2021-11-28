import {Habitat} from "../../habitat/models/habitat"
export interface Animal {
    _id?:string;
    id:number;
    name:string;
    isCarnivore:boolean;
    family:string;
}
export interface AnimalDetail{
    _id?:string;
    id:number;
    name:string;
    isCarnivore:boolean;
    family:Family
}
interface Family{
    _id:string;
    id:number;
    name:string;
    livingInGroup:boolean;
    habitat:Habitat;
}
