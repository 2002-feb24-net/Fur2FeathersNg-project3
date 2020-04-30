export class Contact {
    constructor (
        public name: string,
        public phone: string,
        public email: string,
        public state: string,
        public zip: string,
        public contact_method: string,
        public pet_name: string,
        public pet_species: string,
        public pet_age: number,
        public subject: string,
        public text: string
    ) { }
}