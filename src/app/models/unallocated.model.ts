import { Versionhistory } from "./versionhistory.model";

class  Unallocated{
    constructor(
        public imdcode:number,
        public imdname:string,
        public amcode:number,
        public amname:string,
        public pbd:string,
        public codename:string,
        public digitlead:string,
        public rmname:string,
        public rmsts:string,
        public city:string,
        public team:string,
        public type:string,
        public rmcode:number,
        public imdsts:string,
        public imdmstrcity:string,
        public channel:Array<string>,
        public zone:string,
        public versionhistory:Array<Versionhistory>
    ){}
}