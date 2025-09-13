import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, switchMap, throwError} from 'rxjs';
import { tap } from 'rxjs';
import { Client } from '../Interfaces/client';
import { Seller } from '../Interfaces/seller';
import { map } from 'rxjs/operators';
import {UserDetails} from "../Interfaces/UserDetails";
import {Project} from "../Interfaces/Project";
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080';



  // projects
  getproject():any{
    return this.http
      .get<any>(`${this.baseUrl}/projects/all`);
  }
  getprojectbysellerid():any{
    return this.http.get<any>(`${this.baseUrl}/projects/op/${JSON.parse(localStorage.getItem('user') || '{}').id}`);
  }
  deleteprojectbysellerid(projectId:any):any{
    return this.http.delete<any>(`${this.baseUrl}/projects/delete/${JSON.parse(localStorage.getItem('user') || '{}').id}/${projectId}`);
  }
  postProject(project: Project): Observable<any> {
    console.log("USER ID",this.getUserId())

    return this.http.post<any>(`${this.baseUrl}/projects/${JSON.parse(localStorage.getItem('user') || '{}').id}`, project);
  }

  getprojectById():any{
    return this.http
      .get<any>(`${this.baseUrl}/projects/all`);
  }

  private userId: number;

  setUserId(id: number): void {
    this.userId = id;
    localStorage.setItem('userId', id.toString());
  }

  getUserId(): number {
    const userIdString = Number(localStorage.getItem('userId'));
    return userIdString ? +userIdString : null;
  }
  getUserIdByEmail(email: string): Observable<number> {
    return this.http
      .get<Seller>(`${this.baseUrl}/sellers/search?email=${email}`)
      .pipe(
        map((seller: Seller) => {
          // Store the user ID and set user type in local storage
          this.setUserId(seller.id);
          this.setUserType('seller');
          return seller.id;
        })
      );
  }

  getUserType(): string{
    // Retrieve user type from local storage
    const userType = localStorage.getItem('user');
    return userType || '';
  }

  setUserType(userType: string): void {
    // Set user type in local storage
    localStorage.setItem('userType', userType);
  }

  isSeller(): boolean {
    // Retrieve user type from local storage
    const userType = localStorage.getItem('role');
    console.log('userType:', userType);
    return userType.toLowerCase() === 'seller';
  }

  getClient(): Observable<Client> {
    let user = JSON.parse(localStorage.getItem('user'));
    const clientId = user.id;

    return this.http
      .get<Client>(`${this.baseUrl}/clients/${clientId}`)
      .pipe(
        tap((response: Client) =>
          console.log('Response from getClient:', response)
        )
      );
  }

  getSeller(): Observable<Seller> {
    let user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user.id) {
      console.warn("Aucun utilisateur trouvé dans localStorage ou ID manquant.");
      return throwError(() => new Error("Utilisateur non trouvé"));
    }

    const sellerId = user.id;

    return this.http.get<Seller>(`${this.baseUrl}/sellers/${sellerId}`).pipe(
      tap((response: Seller) => console.log('Response from getSeller:', response))
    );
  }



  postClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}/clients`, client);
  }

  postSeller(seller: Seller): Observable<Seller> {
    return this.http.post<Seller>(`${this.baseUrl}/sellers`, seller);
  }
  putSeller(sellerId: number, seller: Seller): Observable<Seller> {
    const url = `${this.baseUrl}/sellers/${sellerId}`;
    return this.http.put<Seller>(url, seller);
  }

  // Pour obtenir l'image/ seller
  getSynthImage(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/sellers/${id}/image`, { responseType: 'blob' });
  }

  // Pour poster l'image/ seller
  createSynthImage(id: number, imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', imageFile, imageFile.name);

    return this.http.post(`${this.baseUrl}/sellers/${id}/image`, formData);
  }

  constructor(private http: HttpClient) {}






}
