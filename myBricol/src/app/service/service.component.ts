import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '../home/project';
import { Occupation } from '../Interfaces/occupation';
import { City } from '../Interfaces/city';
import { Tasker } from '../Interfaces/tasker';
import { ProjectsCardComponent } from "../home/projects-card/projects-card.component";
import { JobsSearchBarComponent } from "../home/jobs-search-bar/jobs-search-bar.component";


@Component({
  selector: 'app-add-project',
  templateUrl: './service.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, ProjectsCardComponent, JobsSearchBarComponent],
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  constructor(private router:Router) {}

  options: string[] = Object.values(Occupation);

  cities: string[] = Object.values(City);

  projects: Project[] = [
    {
      title: 'House Cleaning',
      src: 'cleaning-service.jpeg',
      min: 100,
      max: 200,
    },
    {
      title: 'Furniture Assembly',
      src: 'AssemblingFurniture-full.jpg',
      min: 150,
      max: 250,
    },
    { title: 'Painting Services', src: 'painture.jfif', min: 120, max: 180 },
    {
      title: 'Plumbing Repair',
      src: 'R.jfif',
      min: 200,
      max: 300,
    },
    {
      title: 'Electrical Fixes',
      src: 'electrical.jpeg',
      min: 80,
      max: 150,
    },
    { title: 'Garden Maintenance', src: 'garden.jpg', min: 170, max: 220 },
  ];
  taskers: Tasker[] = [
    {
      name: 'Ali Mohamed',
      slogan: 'Your Trusted Handyman',
      description:
        'Experienced in various home repair tasks. Customer satisfaction is my top priority!',
      rating: 95,
      img: 'ali-mohamed.png', // Placeholder image filename
      skills: [
        { description: 'Plumbing' },
        { description: 'Electrical Repair' },
        { description: 'Carpentry' },
      ],
      completedTaskNumber: 120,
    },

    {
      name: 'Mohamed Jamal',
      slogan: 'Your Friendly IT Guy',
      description:
        'Solving tech issues with a smile. From troubleshooting to setting up networks!',
      rating: 78,
      img: 'computerRepair.jpeg', // Placeholder image filename
      skills: [
        { description: 'Computer Repair' },
        { description: 'Network Setup' },
        { description: 'Software Installation' },
      ],
      completedTaskNumber: 60,
    },

    {
      name: 'Ahmed Khalid',
      slogan: 'Skilled Carpenter',
      description:
        'Crafting wood into beautiful creations. From furniture to intricate woodwork!',
      rating: 85,
      img: 'ahmed-khalid.png', // Placeholder image filename
      skills: [
        { description: 'Custom Furniture' },
        { description: 'Wood Carving' },
        { description: 'Cabinet Making' },
      ],
      completedTaskNumber: 90,
    },
    {
      name: 'Youssef Hassan',
      slogan: 'Professional Electrician',
      description:
        'Ensuring your electrical systems are safe and efficient. Handling installations and repairs!',
      rating: 91,
      img: 'sara-hassan.png', // Placeholder image filename
      skills: [
        { description: 'Electrical Wiring' },
        { description: 'Lighting Installation' },
        { description: 'Appliance Repair' },
      ],
      completedTaskNumber: 110,
    },
  ];

  offers: string[] = [
    'Handyman Services',
    'Help Moving',
    'Hire Painter',
    'Hire Plumber',
    'Furniture Movers',
    'Laundry Services',
    'TV Mounting',
    'House Cleaning',
  ];


    navigateToSignUp() {
  this.router.navigate(['/signUp']);
}
    // Navigate to the sign-up page


}
