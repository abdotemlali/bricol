import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerSignUpComponent } from './seller-sign-up/seller-sign-up.component';
import { ClientSignUpComponent } from './client-sign-up/client-sign-up.component';
import { RouterOutlet } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    SellerSignUpComponent,
    ClientSignUpComponent,
    RouterOutlet,
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  // Set default to 'client' or 'seller'

  isSignUpRoute: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
   
  }
  
}
