import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailService } from '../../services/cocktail.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-search-by-ingredients',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-by-ingredients.component.html',
  styleUrls: ['./search-by-ingredients.component.css']
})

export class SearchByIngredientsComponent {
  form = this.fb.group({
    ingredients: this.fb.array([])
  });

  results: any[] = [];

  constructor(private fb: FormBuilder, private cocktailService: CocktailService) {}

  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredientField(): void {
    if (this.ingredients.length < 5) {
      this.ingredients.push(this.fb.control(''));
    }
  }

  searchCocktails(): void {
    const query = this.ingredients.value.filter(Boolean).join(',');
    this.cocktailService.searchByIngredients(query).subscribe({
      next: (data) => { this.results = data.drinks; },
      error: (error) => { console.error('Search failed:', error); }
    });
  }

  isSearchDisabled(): boolean {
    return this.ingredients.value.every(ing => !ing.trim());
  }
}
