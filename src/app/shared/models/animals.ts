import { Family } from "./family"
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

