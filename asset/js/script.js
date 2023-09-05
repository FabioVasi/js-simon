/*
Traccia

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

Consigli

Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
*/



const correctiontime = new Date("Sep 6, 2023 9:30:00").getTime();

console.log(correctiontime);

let myDate = new Date().getTime();

console.log(myDate);

const clock = setInterval(function() {
    
    //document.querySelector('.countDown').innerHTML = ;

    
}, 1000);