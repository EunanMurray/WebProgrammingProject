import { Routes } from '@angular/router';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';
import { SearchByIngredientsComponent } from './components/search-by-ingredients/search-by-ingredients.component';
import { PopularCocktailsComponent } from './components/popular-cocktails/popular-cocktails.component';

export const routes: Routes = [
    { path: '', component: PopularCocktailsComponent, pathMatch: 'full' },
    { path: 'search-name', component: SearchByNameComponent },
    { path: 'search-ingredients', component: SearchByIngredientsComponent }
];