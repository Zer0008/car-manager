export class AnnonceVente {
    constructor(
        public datePublication: Date,
        public libelleAnnonceVente: string,
        public descriptifAnnonceVente: string,
        public prixVente: string,
        public photo: any,
        public kilometrage: number,
        public ville: string){}
}