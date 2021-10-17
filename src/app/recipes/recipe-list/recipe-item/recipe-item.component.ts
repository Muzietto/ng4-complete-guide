import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { LoggingService } from '../../../shared/logging.service';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers: [],
})
export class RecipeItemComponent implements OnInit {
  @Input() recippe: Recipe;
  
  constructor(private loggingService: LoggingService,
              private recipeService: RecipeService) { 
  }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeService.onRecipeSelected(this.recippe);
 }

}
