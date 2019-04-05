import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
      'https://image.shutterstock.com/image-photo/grilled-steak-260nw-252442216.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
