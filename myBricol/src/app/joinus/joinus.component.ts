import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joinus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css'],
})
export class JoinusComponent {
  constructor(private router: Router) {}
  signUp() {
    this.router.navigate(['/signUp']);
  }

  login() {
    this.router.navigate(['/login']);
    // TODO: Implement navigateLogin method
    // this.router.navigate(['/login']);
  }
}
