import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './header/recipes/recipes.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './header/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailsComponent } from './header/recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './header/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipes/recipe-list/recipe-item/recipe-item.component';
import {DropdownDirective} from './header/shared/dropdown.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    DropdownDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
