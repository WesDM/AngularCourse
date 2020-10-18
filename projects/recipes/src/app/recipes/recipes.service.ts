import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      0,
      'Spaghetti',
      'Angel Hair Pasta w/ Meat Sauce',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Noodles', 100),
        new Ingredient('Oregano', 2)
      ]),
    new Recipe(
      1,
      'Lasagna',
      'Three Cheese',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Noodles', 4),
        new Ingredient('Cheese', 2)
      ]),
    new Recipe(
      2,
      'Pizza',
      'Extra Cheese',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg',
      [
        new Ingredient('Mushrooms', 11),
        new Ingredient('Flour', 3),
        new Ingredient('Cheese', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
