import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../../shared/recipe.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	@Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddRecipe() {
  	this.recipeService.addIngrediantsToShoppingList(this.recipe.ingrediants);
  }
}
