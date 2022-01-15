import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://pm1.narvii.com/6449/66bb7c97016eeda2c32c5174a38ee626a13feea2_128.jpg'),
    new Recipe('A Test Recipe', 'This is simple a test', 'https://pm1.narvii.com/6449/66bb7c97016eeda2c32c5174a38ee626a13feea2_128.jpg'),
  ];

  constructor() { 

  }

  ngOnInit(): void {
  }

}
