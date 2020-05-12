import { Claim } from './claim';

export class Pet {
    constructor (
        public petId: number = 0,
        public name: string = "",
        public species: string = "",
        public color: string = "",
        public age: number = 0,
        public sex: string = "",
        public policy: string = "",
        public status: string = "",
        public imgUrl: string = "",
        public customerId: number = -1,
        public preexisting_conditions: string = "",
        public claims_history: Claim[] = []
    ) {}
}