import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCocktailsComponent } from './popular-cocktails.component';

describe('PopularCocktailsComponent', () => {
  let component: PopularCocktailsComponent;
  let fixture: ComponentFixture<PopularCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularCocktailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
