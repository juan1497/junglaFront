import { Habitat } from "./habitat";
export interface Family {
    _id?:string;
    id:number;
    name:string;
    livingInGroup:boolean;
    habitat:Habitat;
}
