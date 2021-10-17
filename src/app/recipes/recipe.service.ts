import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from './recipe.model';
import { LoggingService } from '../shared/logging.service';

@Injectable()
export class RecipeService {
    private recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'this is a test', 'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?webp=true&quality=90&resize=940%2C399'),
        new Recipe('A bad Recipe', 'this is a second test', 'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?webp=true&quality=90&resize=940%2C399'),
      ];

    constructor(private logger: LoggingService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    subscribeToRecipeSelected(callback: (r: Recipe) => void) {
        this.recipeSelected.subscribe(callback);
    }

    onRecipeSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
        this.logger.log(`A recipe was chosen: ${recipe.name}`);
    }

}