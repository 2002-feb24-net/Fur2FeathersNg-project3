import { Claim } from './claim';

export class Pet {
    constructor (
        public name: string,
        public species: string,
        public color: string,
        public age: number,
        public sex: string,
        public policy: string,
        public status: string,
        public img_url: string,
        public claims_history: Claim[]
    ) {}
}