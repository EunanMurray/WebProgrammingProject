import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailService } from '../../services/cocktail.service';
import { Cocktail } from '../../cocktail';  

@Component({
  selector: 'app-popular-cocktails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-cocktails.component.html',
  styleUrls: ['./popular-cocktails.component.css']
})
export class PopularCocktailsComponent implements OnInit {
  cocktails: Cocktail[] | null = null;

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.getPopularCocktails().subscribe({
      next: (data) => this.cocktails = data.drinks,
      error: (error) => {
        console.error('Failed to load popular cocktails:', error);
        this.cocktails = null;
      }
    });
  }
}
