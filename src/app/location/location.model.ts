export class Place {
    constructor(
        public id: string,
        public name: string,
        public address: string,
        public lat: number,
        public lng: number,
        public types: string,
        public rating: string,
        public userId: string
    ) {}
}