export const dietSchema = [
    { name: 'Voedingsschema op maat', price: '€50 excl. btw' },
    { name: 'Voedingsschema op maat + wekelijkse check-up', price: '€100 excl. btw per maand' },
    { name: '100% Balanced lifestyle voedingsschema', price: '€50 excl. btw' },
    { name: '100% Balanced lifestyle voedingsschema + wekelijkse check-up', price: '€100 excl. btw per maand' },
];

export const trainingSchema = [
    { name: 'Trainingsschema op maat', price: '€50 excl. btw' },
    { name: 'Trainingsschema op maat + wekelijkse check-up', price: '€100 excl. btw per maand' },
    { name: 'Trainingsschema voor thuis | buiten', price: '€50 excl. btw' },
];

export const combiSchema = [
    { name: 'Training + voedingsschema op maat', price: '€90 excl. btw' },
    { name: 'Training + voedingsschema op maat + wekelijkse check-up', price: '€125 excl. btw per maand' },
];

export const personalTrainingSchema = [
    { name: '1 op 1 personal training', time: 'Minimaal 3 maanden', quantity: '1x per week 60m', price: '€200 excl. btw' },
    { name: '1 op 1 personal training', time: 'Minimaal 3 maanden', quantity: '2x per week 60m', price: '€300 excl. btw' },
    { name: 'Duo personal training', time: 'Minimaal 3 maanden', quantity: '1x per week 60m', price: '€100 excl. btw pp' },
    { name: 'Duo personal training', time: 'Minimaal 3 maanden', quantity: '2x per week 60m', price: '€150 excl. btw pp' },
    { name: 'Techniek training', time: '1 sportsessie', quantity: '1x 120m', price: '€100 excl. btw' },
    { name: 'Sportschool kickstart', time: '4 sportsessies', quantity: '4x 90m', price: '€300 excl. btw' },
    { name: 'Kickbokslessen', time: 'Per sessie', quantity: '60m', price: '€50 excl. btw' },
];

export const onlineCoachingSchema = [
    {
        name: 'Online coaching algemeen',
        time: 'Minimaal 3 maanden',
        quantity: '1x per week contact',
        price: '€150 excl. btw per maand',
        tooltip: ['1x per maand check up', '1x per week contact moment', "1x per maand schema's aanpassen", 'Zelfstandig progressie bijhouden'],
    },
    {
        name: 'Online coaching intensief',
        time: 'Minimaal 6 maanden',
        quantity: 'Dagelijks contact',
        price: '€200 excl. btw per maand',
        tooltip: ['1x per week check up', 'Dagelijks contact moment', "Schema's naar behoefte aanpassen", 'Progressie word voor je bijgehouden'],
    },
];
