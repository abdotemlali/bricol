import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {Input} from '@angular/core';
@Component({
  selector: 'app-jobs-search-bar',
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
  templateUrl: './jobs-search-bar.component.html',
  styleUrls: ['./jobs-search-bar.component.css'],
})
export class JobsSearchBarComponent {
  @ViewChild('OptionsInput') optionsInput: ElementRef<HTMLInputElement>;
  @Input() options:string[] = [];
  myOptionsControl = new FormControl('');
  
  filteredOptions: string[];
  constructor() {
    this.filteredOptions = this.options.slice();
  }
  filterOptions(): void {
    const filterValue = this.optionsInput.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter((o) =>
      o.toLowerCase().includes(filterValue)
    );
  }
}
