import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Tasker } from '../../Interfaces/tasker';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-takers-card',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './takers-card.component.html',
  styleUrls: ['./takers-card.component.css'],
})
export class TakersCardComponent {
  @Input() taskers: Tasker[];
}
