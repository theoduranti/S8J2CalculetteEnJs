// Pour éxécuter ces fonctions : 
// Vas sur ton navigateur, ouvre une page.
// Clique-droit, inspecter élément.
// Copies-colles et éxécutes dans l'onglet console, les bouts de code ci-dessous (un à un).

// Trouver la valeur maximum d'un array : (ici ce sera 4)
function my_max(a) {
    return console.log(Math.max(...a)) ;
}
var myarray = [1, 3, 2, 4];
my_max(myarray)

// compter le nb de voyelles 
function count_vowels(a) {
    return a.match(/[aeiouy]/gi).length;
}
var word = "bonjour"
count_vowels(word)

// Inverser le sens d'une phrase 
function reverse(a) {
    return a.split("").reverse().join("");
}
var words = "salut ça va"
reverse(words)
