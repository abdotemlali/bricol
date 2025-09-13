import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { Project } from '../../Interfaces/Project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    // Initialisation du formulaire
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      budget: [0, [Validators.required, Validators.min(1)]],
      status: [''],
      serviceType: [''],
      location: [''],
      bookingAvailability: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.projectForm.invalid) {
      console.error('Formulaire invalide !');
      return;
    }

    const newProject: Project = {
      ...this.projectForm.value,
      seller_id: null, // Remplace par l'ID du vendeur si nécessaire
    };

    this.userService.postProject(newProject).subscribe(
      (response) => {
        console.log('Projet ajouté avec succès :', response);
        this.router.navigate(['/myProfile']);
      },
      (error) => {
        console.error('Erreur lors de l’ajout du projet :', error);
      }
    );
  }
}
