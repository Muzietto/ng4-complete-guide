import { Injectable } from "@angular/core";
import { Ingredient } from "./ingredient.model";
import { LoggingService } from './logging.service';

@Injectable()
export class IngredientsService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor(private logger: LoggingService) {}

  onAddIngredient(newIngredient: Ingredient) {
      this.ingredients.push(newIngredient);
      this.logger.log(`A new ingredient was created: ${newIngredient.name}`);
  }

}