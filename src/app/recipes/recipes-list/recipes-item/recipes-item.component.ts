import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
 @Output() recipeSelected = new EventEmitter<void>();

  @Input() recipe!: Recipe;

 constructor(){
 }

 ngOnInit() {

 }
 onSelected() {
  this.recipeSelected.emit();
 }

}
