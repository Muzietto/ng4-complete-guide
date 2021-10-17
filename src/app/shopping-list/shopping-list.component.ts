import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from '../shared/ingredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [IngredientsService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.ingredients = this.ingredientsService.ingredients;
  }

  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredientsService.onAddIngredient(newIngredient);
  }

}
