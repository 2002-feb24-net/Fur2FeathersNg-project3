export class Customer {
    constructor (
        public name: string,
        public street: string,
        public addr2: string,
        public city: string,
        public state: string,
        public zip: string,
        public phone: string,
        public email: string,
        public username: string,
        public password: string,
        public pets: number[]
    ) {}
}