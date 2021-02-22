import { Versionhistory } from "./versionhistory.model";

export class Employee{
    constructor(
        public name:string,
        public ecode:number,
        public designation:string,
        public from:Date,
        public to:Date,
        public rm:string,
        public rmcode:string,
        public lob:string,
        public zone:string,
        public mainloc:string,
        public baseloc:string,
        public profile:string,
        public channels:Array<string>,
        public vertical:string,
        public subvertical:string,
        public typeofemp:string,
        public empstatus:string,
        public emailid:string,
        public phone:number,
        public costshare:string,
        public percentageallocation:string,
        public costcenter:string,
        public versionhistory:Array<Versionhistory>
    ){}
}