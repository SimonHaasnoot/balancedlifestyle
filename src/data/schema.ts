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
    { name: 'Personal training', time: 'Intentie minimaal 12 maanden', duration: "30/45/60m", quantity: '1x of 2x per week' },
    { name: 'Duo personal training', time: 'Intentie minimaal 12 maanden', duration: "30/45/60m", quantity: '1x of 2x per week' },
    { name: 'Techniek training', time: '1 sportsessie', duration: "120m", quantity: 'Op aanvraag' },
    { name: 'Sportschool kickstart', time: '4 sportsessies', duration: "90m", quantity: 'Op aanvraag' },
    { name: 'Kickbokslessen', time: 'Per sessie', duration:"30/60m", quantity: 'Op aanvraag' },
    { name: 'Small group training', time: 'Per sessie', duration:"60m", quantity: 'Op aanvraag' },
    { name: 'Hardloop sessie', time: 'Per sessie', duration:"Variabel", quantity: 'Op aanvraag' },
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
