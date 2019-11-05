export class Booking {
    constructor(public bookingId: number = null,
        public source: String = "",
        public destination: String = "",
        public tripStatus: String = "",
        public estimatedFare: number = null,
        public finalFare: number = null,
        public driverId: number = null,
        public customerId: number = null,
        public estimatedTime: number = null,
        public finalTime: number = null,
        public rating: number = null) { }
}