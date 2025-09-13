import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Input} from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-projects-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css'],
})
export class ProjectsCardComponent {
  @Input() projects: Project[];
}
