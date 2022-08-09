import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','this is a test','https://cdn.pixabay.com/photo/2022/04/13/01/44/plum-blossoms-7129237_960_720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
