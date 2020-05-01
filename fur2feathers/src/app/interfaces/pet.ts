export class pet {
    constructor (
        public name: string,
        public species: string,
        public color: string,
        public age: number,
        public sex: string,
        public policy: string,
        public status: string,
        public claims_history: number[]
    ) {}
}