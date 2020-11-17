import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model'

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe',
            'This is simply a test',
            'https://cdn2.f-cdn.' +
            'com/contestentries/955165/23253642/58a7f73249191_thumb900.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('A good or Bad Choice',
            'Simple yet amazing',
            'https://image.shutterstock.' +
            'com/image-vector/food-recipe-logo-designs-template-260nw-1347612353.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)

            ])
    ];

    constructor(private slService: ShoppingListService) {

    }

    getReciopes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}