import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';
import { LoggingService } from "../shared/logging.service";

@Injectable()
export class ShoppingListService {
  private ingredientChosen = new EventEmitter<Ingredient>();
  static nullIngredient: Ingredient = new Ingredient('', 0, 0);
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor(private logger: LoggingService) {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
      this.ingredientChosen.emit(ShoppingListService.nullIngredient);
      this.ingredients.push(newIngredient);
      this.logger.log(`A new ingredient was created: ${newIngredient.name}`);
  }

  removeIngredient(ingredient: Ingredient) {
    const index = this.ingredients.findIndex(i => i.id === ingredient.id);
    if (index > -1) {
      this.ingredients.splice(index, 1);
    }
    this.ingredientChosen.emit(ShoppingListService.nullIngredient);
  }

  subscribeToIngredientChosen(callback: (i: Ingredient) => void) {
    this.ingredientChosen.subscribe(callback);
  }

  onIngredientChosen(ingredient: Ingredient) {
    this.ingredientChosen.emit(ingredient);
    this.logger.log(`An ingredient was chosen: ${ingredient.id}`);
  }

  clearChosenIngredient() {
    this.ingredientChosen.emit(ShoppingListService.nullIngredient);
  }
}