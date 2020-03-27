$(document).ready(function () {
    $('.carousel').carousel();

});

var cocktailSearch = $("#cocktailSearch");
var recipes = $(".recipes");
var drinkHits = $(".drink-hits");

recipes.hide();

function drinkSearch(cocktailName) {
    var cocktailInput = $("#cocktailInput");
    cocktailName = cocktailInput.val();
    console.log(cocktailName);
    var drinkQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName;

    $(".drink-hits").empty();
    $(".images").empty();


    $.ajax({
        url: drinkQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var arrLength = Math.min(response.drinks.length, 5);

        var recipes = $(".recipes");

        recipes.show();

        for (var i = 0; i < arrLength; i++) {
            var drinkHits = $(".drink-hits");
            var drink = $("<div>");
            drink.addClass("drink-container-style")
            var drinkListItem = $("<p>");
            drinkListItem.text(cocktail);
            var cocktail = response.drinks[i].strDrink;
            var instructions = response.drinks[i].strInstructions;
            // var drinkProperty = response.drinks[i][drinkKeys[j]];

            var drinkKeys = Object.keys(response.drinks[i]);
            // lines 183-194 until able to fix - these lines print ingredients to page
            
            var ingredientNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
            var k = 0;
            var numOfIngredients = ingredientNum[k];

            
            // lines 183-194 until able to fix - these lines print ingredients to page
            
            var ingredientList = $("<ul>");
            var drinkIngredients = "Ingredients are: ";
            

            for (var j = 0; j < drinkKeys.length; j++) {
                var drinkProperty = response.drinks[i][drinkKeys[j]];
                if (drinkProperty && drinkKeys[j].indexOf("strIngredient") !== -1) {
                    console.log(numOfIngredients + drinkProperty);
                   
                   
                    var ingredientItem = $("<li>");
                    ingredientItem.addClass("ingredient-list");
                    ingredientItem.append(numOfIngredients + ". " + drinkProperty);
                    ingredientList.append(ingredientItem);
                    drinkHits.append(ingredientList);
                }
            }


            drink.text(cocktail + ": " + instructions);
            drinkHits.append(drink);
            var card = $(".images");
            var image = $("<img>");

            var choice = response.drinks[i].strDrinkThumb;
            image.attr("src", choice);
            image.addClass("cocktail-image");
            var carouselItem = $(".carousel-item");
            card.append(image);

        }

    });


    var cocktailBtn = $("<button>");
    cocktailBtn.addClass("btn btn-primary")

    cocktailBtn.on("click", function () {
        var drinkHits = $(".drink-hits");
        var drink = $("<div>");
        drink.addClass("drink-container-style")
        var drinkListItem = $("<p>");
        drinkListItem.text(cocktail);
        var cocktail = response.drinks[i].strDrink;
        var instructions = response.drinks[i].strInstructions;
        drink.text(cocktail + ": " + instructions);
        drinkHits.append(drink);
        var card = $(".images");
        var image = $("<img>");
        var choice = response.drinks[i].strDrinkThumb;
        image.attr("src", choice);
        image.addClass("cocktail-image");
        var carouselItem = $(".carousel-item");
        card.append(image);

    });

};

cocktailSearch.on("click", function () {
    drinkSearch();
});

var favClick = $("#add-fav-click");
favClick.on("click", function () {
    var cocktailInput = $("#cocktailInput");
    var cocktailName = cocktailInput.val();
    var drinkHistory = $(".drink-history");
    var li = $("<li>");
    var cocktailBtn = $("<button>");
    cocktailBtn.addClass("fav-btn btn btn-primary");
    cocktailBtn.attr("value", cocktailName);
    cocktailBtn.text(cocktailName);
    li.append(cocktailBtn);
    li.addClass("history-list");
    drinkHistory.append(li);

});

$(document).on("click", ".fav-btn", function () {
    var cocktailValue = $(this).attr("value");
    console.log(cocktailValue);
    var drinkQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailValue;

    $(".drink-hits").empty();
    $(".images").empty();


    $.ajax({
        url: drinkQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var arrLength = Math.min(response.drinks.length, 5);

        var recipes = $(".recipes");

        recipes.show();

        for (var i = 0; i < arrLength; i++) {
            var drinkHits = $(".drink-hits");
            var drink = $("<div>");
            drink.addClass("drink-container-style")
            var drinkListItem = $("<p>");
            drinkListItem.text(cocktail);
            var cocktail = response.drinks[i].strDrink;
            var instructions = response.drinks[i].strInstructions;

            var drinkKeys = Object.keys(response.drinks[i]);
            var ingredientNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
            var k = 0;
            var numOfIngredients = ingredientNum[k];
            
            // lines 183-194 until able to fix - these lines print ingredients to page
            
            var ingredientList = $("<ul>");
            var drinkIngredients = "Ingredients are: ";
            

            for (var j = 0; j < drinkKeys.length; j++) {
                var drinkProperty = response.drinks[i][drinkKeys[j]];
                if (drinkProperty && drinkKeys[j].indexOf("strIngredient") !== -1) {
                    console.log(numOfIngredients + drinkProperty);
                   
                   
                    var ingredientItem = $("<li>");
                    ingredientItem.addClass("ingredient-list");
                    ingredientItem.append(numOfIngredients + ". " + drinkProperty);
                    ingredientList.append(ingredientItem);
                    drinkHits.append(ingredientList);
                }
            }

            drink.text(cocktail + " - " + instructions);
            drinkHits.append(drink);
            var card = $(".images");
            var image = $("<img>");

            var choice = response.drinks[i].strDrinkThumb;
            image.attr("src", choice);
            image.addClass("cocktail-image");
            var carouselItem = $(".carousel-item");
            // originally appended to card
            card.append(image);

        }

    });


    var cocktailBtn = $("<button>");
    cocktailBtn.addClass("btn btn-primary")

    cocktailBtn.on("click", function () {
        var drinkHits = $(".drink-hits");
        var drink = $("<div>");
        drink.addClass("drink-container-style")
        var drinkListItem = $("<p>");
        drinkListItem.text(cocktail);
        var cocktail = response.drinks[i].strDrink;
        var instructions = response.drinks[i].strInstructions;
        drink.text(cocktail + ": " + instructions);
        drinkHits.append(drink);
        var card = $(".images");
        var image = $("<img>");
        var choice = response.drinks[i].strDrinkThumb;
        image.attr("src", choice);
        image.addClass("cocktail-image");
        var carouselItem = $(".carousel-item");
        card.append(image);

    });


});



// trying to make list item button create a confirm

var cocktailInput = $("#cocktailInput");
var cocktailName = cocktailInput.val();
var drinkHistory = $(".drink-history");
var li = $("<li>");
var cocktailBtn = $("<button>");
cocktailBtn.addClass("btn btn-primary");

cocktailBtn.on("click", function () {
    console.log("clicked");



});
