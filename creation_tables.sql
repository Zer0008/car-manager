-- show tables;
USE no98uoi677luebin ;
CREATE TABLE Users (
	idUser 			int NOT NULL AUTO_INCREMENT, -- clé primaire
	email 			varchar(100) NOT NULL,
	password 		varchar(100) NOT NULL,
	telephone 		int,
	numeroRue 		int,
	libelleRue 		varchar(100),
	codePostal 		int,
	ville 			varchar(30),


	PRIMARY KEY (idUser)
);


CREATE TABLE Particulier (
	idParticulier 	int NOT NULL AUTO_INCREMENT, -- clé primaire
	idUser 			int,

	PRIMARY KEY (idParticulier),
	FOREIGN KEY (idUser) REFERENCES Users(idUser)

);

CREATE TABLE Garage (
	idGarage 		int NOT NULL AUTO_INCREMENT, -- clé primaire
	idUser 			int,
	numSIREN		varchar(9),
	numNIC			varchar(5),

	PRIMARY KEY (idGarage),
	FOREIGN KEY (idUser) REFERENCES Users(idUser)

);


CREATE TABLE Vehicule(
	idVehicule 			int NOT NULL AUTO_INCREMENT,
	immatriculation 	varchar(100),
	libelleVoiture 		varchar(100),
	marqueVoiture 		varchar(100),
	modeleVoiture 		varchar(100),
	anneeCirculation	YEAR(4),
	finition 			varchar(100),
	justificatif 		varchar(100),
	photo 				varchar(100),
	moteur 				varchar(100),
	carburant 			varchar(5),
	transmission 		varchar(100),
	mesure				varchar(100),
	boiteVitesse		varchar(100),
	statut				varchar(100),
	visibilite			varchar(100),
	isActive			boolean,

	PRIMARY KEY (idVehicule)
);

CREATE TABLE AcquisitionVoiture (

	idUser 					int NOT NULL,
	idVehicule				int NOT NULL,
	dateDebutAcquisition	date NOT NULL,
	dateFinAcquisition		date,

	PRIMARY KEY (idUser,idVehicule,dateDebutAcquisition),
    FOREIGN KEY (idUser) 		REFERENCES Users(idUser),
    FOREIGN KEY (idVehicule) 	REFERENCES Vehicule(idVehicule)

);


CREATE TABLE Reglage (
	idReglage 				int NOT NULL AUTO_INCREMENT,

	PRIMARY KEY (idReglage)
);


CREATE TABLE Notification (
	idNotification 			int NOT NULL AUTO_INCREMENT,
	idUserEnvoi				int, -- user lié à l'envoi, s'il y en a un, sinon null
	idUserRecep				int, -- user lié à la réception de la notif
	libelleNotification 	varchar(100),
	detailNotification		varchar(1023),
	dateNotification		date,

	PRIMARY KEY (idNotification),
    FOREIGN KEY (idUserEnvoi) 		REFERENCES Users(idUser),
    FOREIGN KEY (idUserRecep) 		REFERENCES Users(idUser)
);


CREATE TABLE AnnoncePanne(
	idAnnoncePanne				int NOT NULL AUTO_INCREMENT,
	-- idUser						int, -- pas besoin car on a l'id du véhicule
	idVehicule					int,
	datePublication				date,
	libelleAnnonce 				varchar(255),
	descriptifAnnonce			varchar(1023),

	PRIMARY	KEY (idAnnoncePanne),
	-- FOREIGN KEY (idUser) 		REFERENCES Users(idUser),
    FOREIGN KEY (idVehicule) 	REFERENCES Vehicule(idVehicule)
);

CREATE TABLE AnnonceVente(
	idAnnonceVente				int NOT NULL AUTO_INCREMENT,
	-- idUser						int, -- pas besoin car on a l'id du véhicule
	idVehicule					int,
	datePublication				date,
	libelleAnnonceVente 		varchar(255),
	descriptifAnnonceVente		varchar(1023),
	prixVente					float(10,2),
	photo						varchar(10),
	kilometrage					float(10,2),

	PRIMARY	KEY (idAnnonceVente),
	-- FOREIGN KEY (idUser) 		REFERENCES Users(idUser),
    FOREIGN KEY (idVehicule) 	REFERENCES Vehicule(idVehicule)
);



CREATE TABLE TypePanne(
	idTypePanne 			int NOT NULL AUTO_INCREMENT,
	libelleTypePanne 		varchar(31),

	PRIMARY KEY (idTypePanne)
);


CREATE TABLE Panne (
	idPanne 				int NOT NULL AUTO_INCREMENT,
	idAnnoncePanne			int, -- identifiant de l'annonce de panne s'il y en a une
	idTypePanne				int,
	idVehicule				int,

	PRIMARY KEY (idPanne),
	FOREIGN KEY (idAnnoncePanne) 	REFERENCES AnnoncePanne(idAnnoncePanne),
    FOREIGN KEY (idTypePanne) 		REFERENCES TypePanne(idTypePanne),
    FOREIGN KEY (idVehicule) 	REFERENCES Vehicule(idVehicule)
);


-- On admet que l'on peut intervenir de 0 à n fois sur une Panne d'un véhicule
CREATE TABLE Intervention (
	idIntervention 				int NOT NULL AUTO_INCREMENT,
	-- idVehicule 	--> pas besoin car on a l'idPanne
	-- idPanne 		--> pas besoin car on a l'idPanne
	idGarage					int, -- Garage effectuant l'intervention
	idPanne						int, -- identifiant de la panne
	libelleIntervention 		varchar(255),
	justificatifIntervention 	varchar(255),
	dateDebutIntervention 		date,
	dateFinIntervention			date,

	PRIMARY KEY (idIntervention),
    FOREIGN KEY (idGarage) 				REFERENCES Garage(idGarage),
    FOREIGN KEY (idPanne) 				REFERENCES Panne(idPanne)
);
