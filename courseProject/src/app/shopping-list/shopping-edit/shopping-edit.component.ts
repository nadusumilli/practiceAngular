import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingrediant } from '../../shared/ingrediant.model'
import { ShoppingListService } from '../../shared/shopping-list.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
  	const newIngrediant = new Ingrediant(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
  	this.shoppingList.addIngrediant(newIngrediant);
  }

}
