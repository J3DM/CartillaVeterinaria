import {History} from './History'
export class Pet {
    constructor(
        public _id:string,
        public typePet: string,
        public race: string,
        public name: string,
        public dob: Date,
        public weight: number,
        public nextAppoint: Date,
        public history: History
    ){

    }
}