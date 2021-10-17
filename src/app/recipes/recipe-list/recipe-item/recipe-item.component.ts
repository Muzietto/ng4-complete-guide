import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { LoggingService } from '../../../shared/logging.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers: [],
})
export class RecipeItemComponent implements OnInit {
  @Input() recippe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor(private loggingService: LoggingService) { 
  }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeSelected.emit();
    this.loggingService.log(`A recipe was chosen: ${this.recippe.name}`);
  }

}
