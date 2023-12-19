// // Opdracht 1a
// console.log('De afdeling sales heeft '+ departments.sales.numberOfEmployees + ' medewerkers');
//
// // opdracht 1b
// console.log('Marketing is een leuke afdeling om te werken. ' + departments.marketing.description);
//
// // opdracht 1c
// console.log('De afdeling Customer Service heeft ' + departments["customer-service"].numberOfEmployees + ' medewerkers');
//
// // opdracht 1d
// console.log('Sales is een uitdagende afdeling om te werken als Verkoopmanager. ' + departments.sales.jobs[1].description);
//
// opdracht 2a
const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
console.log(userInput);

// opdracht 2b + 2c
if (userInput === 'marketing') {
    console.log('Je koos '+userInput+'. '+departments.marketing.description);
} else if (userInput === 'sales') {
    console.log('Je koos '+userInput+'. '+departments.sales.description);
} else if (userInput === 'customer-service') {
    console.log('Je koos '+userInput+'. '+departments["customer-service"].description);
} else {
    console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen');
}

// // opdracht 3a
// const userInputMarketing = prompt('Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in. \n '+
//     '0: '+departments.marketing.jobs[0].title+' \n '+
//     '1: '+departments.marketing.jobs[1].title+' \n '+
//     '2: '+departments.marketing.jobs[2].title+' \n '+
//     '3: '+departments.marketing.jobs[3].title);
//
// // opdracht 3b + 3c
// switch (userInputMarketing) {
//     case '0':
//         console.log('Je koos '+departments.marketing.jobs[0].title+'.'+' Een uitdagende rol! '+departments.marketing.jobs[0].description);
//         break;
//     case '1':
//         console.log('Je koos '+departments.marketing.jobs[1].title+'.'+' Een uitdagende rol! '+departments.marketing.jobs[1].description);
//         break;
//     case '2':
//         console.log('Je koos '+departments.marketing.jobs[2].title+'.'+' Een uitdagende rol! '+departments.marketing.jobs[2].description);
//         break;
//     case '3':
//         console.log('Je koos '+departments.marketing.jobs[3].title+'.'+' Een uitdagende rol! '+departments.marketing.jobs[3].description);
//         break;
//     default:
//         console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.');
// }

// opdracht 4a
const employeeNumber = userInput['numberOfEmployees']
console.log(userInput+' is een leuke afdeling om te werken. Er werken op dit moment '+employeeNumber+' medewerkers');