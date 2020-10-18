import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-list/recipe-item/recipe-detail/recipe-detail.component';
import {SelectRecipeComponent} from './select-recipe/select-recipe.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},  // redirect if full path matches ''
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: SelectRecipeComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],  useHash for when the web server returns 404 because it doesn't recognize angular routing format
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
