import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Seller } from '../Interfaces/seller';
import { Client } from '../Interfaces/client';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-myProfile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myProfile.component.html',
  styleUrls: ['./myProfile.component.css'],
})
export class MyProfileComponent implements OnInit {
  seller: Seller | null = null;
  client: Client | null = null;
  phone: string | null = '';
  email: string | null = '';
  name: string | null = '';
  gender: string | null = '';
  profileImageUrl: any;
  projectlist: any[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.phone = localStorage.getItem('phone');
      this.email = localStorage.getItem('email');
      this.name = localStorage.getItem('name');
      this.gender = localStorage.getItem('gender');
    }, 1);
    this.loadUserData();
    this.refreshImage();
  }

  loadUserData() {
    const isSeller = this.userService.isSeller();
    console.log('isSeller:', isSeller);



    this.userService.getprojectbysellerid().subscribe(
      (project: any) => {
        this.projectlist = project;
      },
      (error) => console.error('Error fetching projects:', error)
    );
  }

  copyToClipboard(text: string, message: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert(message + text);
    });
  }

  editProfile() {
    this.router.navigate(['editProfile']);
  }

  addProject() {
    this.router.navigate(['addProject']);
  }

  onFileSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files) {
      this.uploadFile(element.files[0]);
    }
  }

  uploadFile(file: File) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const sellerId = user.id;

    this.userService.createSynthImage(sellerId, file).subscribe(
      () => {
        console.log('Image uploaded successfully');
        this.refreshImage();
      },
      (error) => console.error('Error uploading image', error)
    );
  }

  refreshImage() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const id = user.id;

    this.userService.getSynthImage(id).subscribe((imageData) => {
      let objectURL = URL.createObjectURL(imageData);
      this.profileImageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      this.changeDetectorRef.detectChanges();
    });
  }
}
