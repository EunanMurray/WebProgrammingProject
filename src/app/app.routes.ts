import { Routes } from '@angular/router';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';
import { SearchByIngredientsComponent } from './components/search-by-ingredients/search-by-ingredients.component';


export const routes: Routes = [
    { path: '', component: SearchByNameComponent }, 
    { path: 'search-ingredients', component: SearchByIngredientsComponent },
];
