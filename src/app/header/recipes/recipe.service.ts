import {Recipe} from '../shared/recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
      'https://image.shutterstock.com/image-photo/grilled-steak-260nw-252442216.jpg'),
    new Recipe('A test recipe', 'This is simply a test',
      'https://image.shutterstock.com/image-photo/grilled-steak-260nw-252442216.jpg')
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
