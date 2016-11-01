 function recipeFactory(name, ingredients, steps) {
 var newRecipe = {
    name: name,
    ingredients:ingredients,
    steps: steps,
    ingredientsHtml: function() {
      return '<ul>' + this.ingredients.map (
        function(ingredient) {
          return '<li>' + ingredient + '</li>';
        }
      ).join(" ") + '</ul>';
    },
    stepsHtml: function() {
      return '<ol>' + this.steps.map(
        function(step) {
          return '<li>' + step + '</li>';
        }
        ).join(" ") + '</ol>';
    }
 
 };
   return newRecipe; 
}
// recipeFactory('ice water', ['water', 'ice'], ['pour water', 'add ice cubes', 'drink'])
// tests

function testRecipeFactory() {  
  var grilledCheese = recipeFactory(
    'grilled cheese',
    ['2 slices bread', 'butter', '1 slice cheese'],
    ['Butter bread', 'Put cheese between bread', 'Toast bread on stove']
  ); 
  if (grilledCheese) {
    // `$` is a shortcut to the jQuery library, which
    // you'll learn about in the next unit.
    // Here, we're using jQuery to update elements in the HTML
    $('.js-recipe-name').text(grilledCheese.name);
    $('.js-ingredients').html(grilledCheese.ingredientsHtml());
    $('.js-steps').html(grilledCheese.stepsHtml());
  }
}

testRecipeFactory();