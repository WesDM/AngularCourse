import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../recipe.model';
import {Ingredient} from '../../../../shared/ingredient.model';
import {ShoppingListService} from '../../../../shopping-list/shopping-list.service';
import {RecipesService} from '../../../recipes.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.recipe = this.recipeService.getRecipe(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(+this.route.snapshot.params.id);
      });
  }

  onAddIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }
}
