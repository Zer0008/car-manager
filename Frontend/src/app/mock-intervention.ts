import { Intervention } from './models/Intervention';

export const interventions: Intervention[] = [
    {
      idIntervention:   1,
      idPanne: 1,
      libelleIntervention: 'Remplacement des bougies de préchauffage',
      justificatifIntervention: '',
      dateDebutIntervention: new Date(),
      dateFinIntervention: new Date()
    },
    {
      idIntervention:   2,
      idPanne: 2,
      libelleIntervention: 'Nouveau balai d\'essuie-glace',
      justificatifIntervention: '',
      dateDebutIntervention: new Date(),
      dateFinIntervention: new Date()
    },
    {
      idIntervention:   3,
      idPanne: 2,
      libelleIntervention: 'Amortisseur avant gauche réparé',
      justificatifIntervention: '',
      dateDebutIntervention: new Date(),
      dateFinIntervention: new Date()
    }
  ];

export const AncienInterventions: Intervention[] = [
    {
      idIntervention:   1,
      idPanne: 1,
      libelleIntervention: 'Remplacement de pare-brise',
      justificatifIntervention: '',
      dateDebutIntervention: new Date(),
      dateFinIntervention: new Date()
    },
    {
      idIntervention:   2,
      idPanne: 2,
      libelleIntervention: 'Fil électrique rompu',
      justificatifIntervention: '',
      dateDebutIntervention: new Date(),
      dateFinIntervention: new Date()
    }
  ];