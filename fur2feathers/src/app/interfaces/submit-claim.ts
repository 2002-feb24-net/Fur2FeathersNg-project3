export class SubmitClaim {
    constructor(
        public pet_name:string = "",
        public vet_name:string = "",
        public street: string = "",
        public addr2: string = "",
        public city: string = "",
        public state: string = "",
        public zip: string = "",
        public date: Date = new Date(),
        public total: Number = 0,
        public reason: string = "",
        public diagnosis: string ="",
        public status: string = "Open"
    ) {}
}