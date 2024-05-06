import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from '../cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private apiUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533';

  constructor(private http: HttpClient) { }

  searchByName(name: string): Observable<{drinks: Cocktail[]}> {
    return this.http.get<{drinks: Cocktail[]}>(`${this.apiUrl}/search.php?s=${name}`);
  }

  searchByIngredients(ingredients: string): Observable<{ drinks: Cocktail[] }> {
    return this.http.get<{ drinks: Cocktail[] }>(`${this.apiUrl}/filter.php?i=${ingredients}`);
  }
  
  getDetails(id: string): Observable<{drinks: Cocktail[]}> {
    return this.http.get<{drinks: Cocktail[]}>(`${this.apiUrl}/lookup.php?i=${id}`);
  }
  
  getPopularCocktails(): Observable<{ drinks: Cocktail[] }> {
    return this.http.get<{ drinks: Cocktail[] }>(`${this.apiUrl}/popular.php`);
  }

  
}
