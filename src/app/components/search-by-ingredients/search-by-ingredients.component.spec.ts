import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByIngredientsComponent } from './search-by-ingredients.component';

describe('SearchByIngredientsComponent', () => {
  let component: SearchByIngredientsComponent;
  let fixture: ComponentFixture<SearchByIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchByIngredientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchByIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
