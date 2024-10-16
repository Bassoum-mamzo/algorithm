// Déclaration des variables
let longueurPhrase = 0;
let nombreMots = 0;
let nombreVoyelles = 0;
const voyelles = "aeiouyAEIOUY";

// Lecture de la phrase (en supposant qu'elle se termine par un point)
let phrase = "Entrez votre phrase ici.";

// Traitement de chaque caractère dans la phrase
for (let i = 0; i < phrase.length; i++) {
    let caractere = phrase[i];
    
    // Compter la longueur de la phrase
    longueurPhrase++;
    
    // Vérifier si le caractère est une voyelle
    if (voyelles.includes(caractere)) {
        nombreVoyelles++;
    }
}

// Compter les mots en se basant sur les espaces
nombreMots = phrase.split(" ").length;

// Affichage des résultats dans la console
console.log("Longueur de la phrase : " + longueurPhrase);
console.log("Nombre de mots : " + nombreMots);
console.log("Nombre de voyelles : " + nombreVoyelles);
