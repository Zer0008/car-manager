export class AcquisitionVoiture {
    constructor(
        public idAcheteur: number,
        public idReceveur: number,
        public idVehicule: number,
        public dateAcquisition: Date
    ){}
}