import {Pet} from './pet';

export class Customer {
    constructor (
        public customerId: number =0,
        public name: string = "",
        public street: string = "",
        public addr2: string = "",
        public city: string = "",
        public state: string = "",
        public zip: string = "",
        public phone: string = "",
        public email: string = "",
        public username: string = "",
        public password: string ="",
        public pets: Pet[] = []
    ) {}
}