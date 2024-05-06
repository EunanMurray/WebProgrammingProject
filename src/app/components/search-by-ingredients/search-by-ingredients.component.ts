import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CocktailService } from '../../services/cocktail.service';
import { Cocktail } from '../../cocktail';
import { switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { TextToSpeechService } from '../../services/responsive-voice.service';

@Component({
  selector: 'app-search-by-ingredients',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-by-ingredients.component.html',
  styleUrls: ['./search-by-ingredients.component.css'],
})
export class SearchByIngredientsComponent {
  form = this.fb.group({
    ingredients: this.fb.array([]),
  });

  results: Cocktail[] = [];
  selectedCocktail: Cocktail | null = null;

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService
  ) {}

  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredientField(): void {
    if (this.ingredients.length < 5) {
      this.ingredients.push(this.fb.control(''));
    }
  }

  removeIngredientField(index: number): void {
    this.ingredients.removeAt(index);
  }

  searchCocktails(): void {
    const ingredientList = this.ingredients.value.filter(Boolean).join(',');
    this.cocktailService
      .searchByIngredients(ingredientList)
      .pipe(
        switchMap((initialResults) => {
          const detailObservables = initialResults.drinks.map((drink) =>
            this.cocktailService.getDetails(drink.idDrink)
          );
          return forkJoin(detailObservables);
        })
      )
      .subscribe({
        next: (detailedResults) => {
          this.results = detailedResults.map((res) => res.drinks[0]);
        },
        error: (error) => {
          console.error('Search failed:', error);
          this.results = [];
        },
      });
  }

  addCocktailToDb(cocktail: Cocktail): void {
    this.cocktailService.addCocktail(cocktail).subscribe({
      next: (response) => console.log('Cocktail added!', response),
      error: (error) => console.error('Error adding cocktail', error),
    });
  }

  isSearchDisabled(): boolean {
    return this.ingredients.value.every((ing: string) => !ing.trim());
  }
}
