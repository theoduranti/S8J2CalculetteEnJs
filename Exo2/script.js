function Calculator()
{
    // this = variable de l'instance de la class. that = stock la valeur de this, avant qu'elle soit modifié par les fonctions.
    that = this,
    this.field = "input#number",      
    this.button = "#body .buttons",
    // on définit init (initialisé) comme étant faux.
    this.init = false,

    // EN GROS, INITIER LA CLASS ET STOCKER LES VALEURS
    this.run = function()
    {
        // Lorsqu'un bouton est cliqué, on récupère sa valeur
        $(this.button).click(function() {
            var value = $(this).html();
            // Si that n'est pas initialisé
            if (that.init == false)
            {
                // Alors on lui affecte une valeur vide (on affiche vide)
                $(that.field).val("");
                // Maintenant, il est initialisé
                that.init = true;
            }
            
            // Si la valeur (du bouton cliqué) n'est pas égal à "égal", (autrement dit, si la valeur est "=", il se passe rien)
            // la valeur du field (tout en haut) est égal à la valeur initial (vide) + cette nouvelle valeur.
            // donc là, on enregistre juste tous les nombres à la suite
            if (value != "=")
                $(that.field).val($(that.field).val() + value);
            // On appelle la fonction dispatcher
            that.dispatcher(value);
        });
    },

    // EN GROS, On définit quel sera le symbol qui sera utilisé pour la fonction "opération" et on appelle la fonction "opération"
    this.dispatcher = function(value)
    {
        if ($(this.field).val().indexOf("/") != -1)
            this.operation(value, "/");
        if ($(this.field).val().indexOf("*") != -1)
            this.operation(value, "*");
        if ($(this.field).val().indexOf("-") != -1)
            this.operation(value, "-");
        if ($(this.field).val().indexOf("+") != -1)
            this.operation(value, "+");
    },


    this.operation = function(value, symbol)
    {
        // On split les nombres dès qu'il y a un symbol et on les stock dans un array
        var numbers = $(this.field).val().split(symbol),
            result;
        // On dit à la calculette comment elle doit faire son calcul.
        if (symbol == "/")
            result = numbers[0] / numbers[1];
        else if (symbol == "*")
            result = numbers[0] * numbers[1];
        else if (symbol == "-")
            result = numbers[0] - numbers[1];
        else if (symbol == "+")
            // pour éviter que la machine le lise comme un concaténation
            result = parseFloat(numbers[0]) + parseFloat(numbers[1]);

        // Deux décimales
        result = Math.round((result) * 100) / 100;

        if (numbers.length > 1)
        {
            if (value == "=")
                // Si on fait 2 et qu'on appuie sur = 
                $(this.field).val(result);
                // Alors ça affiche juste 2
            else if (numbers.length > 2)
                // Si on fait 2 et qu'on appuie sur +
                $(this.field).val(result + symbol);
                // Alors ça affiche 2 + 
        }
    };
}