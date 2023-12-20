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
if (userInput === 'marketing'){
    console.log(userInput+' is een leuke afdeling om te werken. Er werken op dit moment '+departments.marketing.numberOfEmployees+' medewerkers');
} else if (userInput === 'sales') {
    console.log(userInput+' is een leuke afdeling om te werken. Er werken op dit moment '+departments.sales.numberOfEmployees+' medewerkers');
} else if (userInput === 'customer-service') {
    console.log(userInput+' is een leuke afdeling om te werken. Er werken op dit moment '+departments["customer-service"].numberOfEmployees+' medewerkers');
} else {
    console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.');
    document.getElementById('error-message').textContent = 'Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.';
}

// opdracht 4b + c
const inputFlex = userInput

const userInputFlex = prompt('Je koos '+userInput+'.'+ 'Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in. \n '+
    '0: '+departments[inputFlex].jobs[0].title+' \n '+
    '1: '+departments[inputFlex].jobs[1].title+' \n '+
    '2: '+departments[inputFlex].jobs[2].title+' \n '+
    '3: '+departments[inputFlex].jobs[3].title);

switch (userInputFlex) {
    case '0':
        console.log('Je koos '+departments[inputFlex].jobs[0].title+'.'+' Een uitdagende rol! '+departments[inputFlex].jobs[0].description);
        document.getElementById('role-title').textContent = departments[inputFlex].jobs[userInputFlex].title;
        document.getElementById('department-description').textContent = departments[inputFlex].description;
        document.getElementById('role-description').textContent = departments[inputFlex].jobs[userInputFlex].description;
        break;
    case '1':
        console.log('Je koos '+departments[inputFlex].jobs[1].title+'.'+' Een uitdagende rol! '+departments[inputFlex].jobs[1].description);
        document.getElementById('role-title').textContent = departments[inputFlex].jobs[userInputFlex].title;
        document.getElementById('department-description').textContent = departments[inputFlex].description;
        document.getElementById('role-description').textContent = departments[inputFlex].jobs[userInputFlex].description;
        break;
    case '2':
        console.log('Je koos '+departments[inputFlex].jobs[2].title+'.'+' Een uitdagende rol! '+departments[inputFlex].jobs[2].description);
        document.getElementById('role-title').textContent = departments[inputFlex].jobs[userInputFlex].title;
        document.getElementById('department-description').textContent = departments[inputFlex].description;
        document.getElementById('role-description').textContent = departments[inputFlex].jobs[userInputFlex].description;
        break;
    case '3':
        console.log('Je koos '+departments[inputFlex].jobs[3].title+'.'+' Een uitdagende rol! '+departments[inputFlex].jobs[3].description);
        document.getElementById('role-title').textContent = departments[inputFlex].jobs[userInputFlex].title;
        document.getElementById('department-description').textContent = departments[inputFlex].description;
        document.getElementById('role-description').textContent = departments[inputFlex].jobs[userInputFlex].description;
        break;
    default:
        console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.');
        document.getElementById('error-message').textContent = 'Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.';
}

// opdracht 5a
// document.getElementById('role-title').textContent = 'Benjamin';
// document.getElementById('department-description').textContent = 'Lasagna';

// opdracht 5b
// document.getElementById('role-title').textContent = departments[inputFlex].jobs[userInputFlex].title;
// document.getElementById('department-description').textContent = departments[inputFlex].description;
// document.getElementById('role-description').textContent = departments[inputFlex].jobs[userInputFlex].description;
// document.getElementById('error-message').textContent = 'Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.';
