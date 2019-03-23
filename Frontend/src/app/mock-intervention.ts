import { Intervention } from './models/Intervention';

export const interventions: Intervention[] = [
    {
      idIntervention:   1,
      libelleIntervention: 'Remplacement des bougies de préchauffage',
      justificatifIntervention: '',
      dateFinIntervention: new Date()
    },
    {
      idIntervention:   2,
      libelleIntervention: 'Nouveau balai d\'essuie-glace',
      justificatifIntervention: '',
      dateFinIntervention: new Date()
    },
    {
      idIntervention:   3,
      libelleIntervention: 'Amortisseur avant gauche réparé',
      justificatifIntervention: '',
      dateFinIntervention: new Date()
    }
  ];

export const AncienInterventions: Intervention[] = [
    {
      idIntervention:   1,
      libelleIntervention: 'Remplacement de pare-brise',
      justificatifIntervention: '',
      dateFinIntervention: new Date()
    },
    {
      idIntervention:   2,
      libelleIntervention: 'Fil électrique rompu',
      justificatifIntervention: '',
      dateFinIntervention: new Date()
    }
  ];