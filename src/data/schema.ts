export const dietSchema = [
    { name: 'Voedingsschema op maat' },
    { name: 'Voedingsschema op maat + wekelijkse check-up' },
    { name: '100% Balanced Lifestyle voedingsschema' },
    { name: '100% Balanced Lifestyle voedingsschema + wekelijkse check-up' },
];

export const trainingSchema = [
    { name: 'Trainingsschema op maat' },
    { name: 'Trainingsschema op maat + wekelijkse check-up' },
    { name: 'Trainingsschema voor thuis | buiten' },
];

export const balancedLifestyleSchema= [
    { name: '🏆 Balanced Lifestyle challenge', time: '3 maanden' },
]

export const combiSchema = [
    { name: 'Training + voedingsschema op maat' },
    { name: 'Training + voedingsschema op maat + wekelijkse check-up' },
];

export const personalTrainingSchema = [
    { name: '1 op 1 personal training', time: 'Minimaal 3 maanden', quantity: '1x per week 60m' },
    { name: '1 op 1 personal training', time: 'Minimaal 3 maanden', quantity: '2x per week 60m' },
    { name: 'Duo personal training', time: 'Minimaal 3 maanden', quantity: '1x per week 60m' },
    { name: 'Duo personal training', time: 'Minimaal 3 maanden', quantity: '2x per week 60m' },
    { name: 'Techniek training', time: '1 sportsessie', quantity: '1x 120m' },
    { name: 'Sportschool kickstart', time: '4 sportsessies', quantity: '4x 90m' },
    { name: 'Kickbokslessen', time: 'Per sessie', quantity: '60m' },
];

export const onlineCoachingSchema = [
    {
        name: 'Online coaching algemeen',
        time: 'Minimaal 3 maanden',
        quantity: '1x per week contact',
        tooltip: ['1x per maand check up', '1x per week contact moment', "1x per maand schema's aanpassen", 'Zelfstandig progressie bijhouden'],
    },
    {
        name: 'Online coaching intensief',
        time: 'Minimaal 6 maanden',
        quantity: 'Dagelijks contact',
        tooltip: ['1x per week check up', 'Dagelijks contact moment', "Schema's naar behoefte aanpassen", 'Progressie wordt voor je bijgehouden'],
    },
];
