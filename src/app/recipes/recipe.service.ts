import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 'https://cdn2.f-cdn.' +
            'com/contestentries/955165/23253642/58a7f73249191_thumb900.jpg'),
        new Recipe('A good or Bad Choice', 'Simple yet amazing', 'https://image.shutterstock.' +
            'com/image-vector/food-recipe-logo-designs-template-260nw-1347612353.jpg')
    ];

    getReciopes() {
        return this.recipes.slice();
    }
}