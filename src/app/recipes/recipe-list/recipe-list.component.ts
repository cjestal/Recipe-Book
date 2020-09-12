import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('new recipe', 'something something', 'data:image/jpeg;base64,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')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}