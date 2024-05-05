import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocktailService } from './services/cocktail.service';
import { Cocktail } from './cocktail';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { SearchByIngredientsComponent } from './components/search-by-ingredients/search-by-ingredients.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, SearchByIngredientsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktail-finder';
  cocktails: Cocktail[] = [];
  errorMessage: any;

  constructor(private cocktailService: CocktailService) {}

  searchByName(name: string): void {
    this.cocktailService.searchByName(name).subscribe({
      next: (data) => {
        this.cocktails = data.drinks;
      },
      error: (error) => {
        console.error('Failed to search cocktails by name:', error);
        this.errorMessage = error;
      }
    });
  }
}
