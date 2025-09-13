import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Input } from '@angular/core';
@Component({
  selector: 'app-cities-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './cities-search-bar.component.html',
  styleUrls: ['./cities-search-bar.component.css'],
})
export class CitiesSearchBarComponent {
  @Input() cities: string[] = [];
  @ViewChild('CitiesInput') citiesInput: ElementRef<HTMLInputElement>;
  myCitiesControl = new FormControl('');
  filteredCities: string[];
  constructor() {
    this.filteredCities = this.cities.slice();
  }

  filterCities(): void {
    const filterValue = this.citiesInput.nativeElement.value.toLowerCase();
    this.filteredCities = this.cities.filter((o) =>
      o.toLowerCase().includes(filterValue)
    );
  }
}
