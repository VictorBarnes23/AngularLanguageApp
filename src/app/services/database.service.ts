import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FavoriteWord } from '../Models/favorite-words';
import { UserTable } from '../Models/user-table';
import { Injectable, Type } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) { }

  baseUrl: string = environment.dbDomain + "/api"
  
  getFavorites():Observable<FavoriteWord[]>{
    return this.http.get<FavoriteWord[]>(this.baseUrl);
  }

  getFavoritesbyId (id: string): Observable <FavoriteWord[]> {
    return this.http.get<FavoriteWord[]> (`${this.baseUrl}/Favorite/${id}`)
  }

  addFavorites(f:FavoriteWord):Observable<FavoriteWord>{
    return this.http.post<FavoriteWord>(`${this.baseUrl}/Favorite`, f)
  }

  DeleteFavorites(f: FavoriteWord):Observable <FavoriteWord> {
    return this.http.delete<FavoriteWord> (`${this.baseUrl}/Favorite/${f.id}`)
  }
  UpdateFavorites (f:FavoriteWord): Observable <FavoriteWord> {
    return this.http.put<FavoriteWord> (`${this.baseUrl}/Favorite/${f.id}`, f)
  }
  getUserbyId(id:string): Observable <UserTable[]> {
    return this.http.get<UserTable[]> (`${this.baseUrl}/Users/${id}`)
  }
  AddUser (u: UserTable): Observable <UserTable> {
    return this.http.post<UserTable> (`${this.baseUrl}/Users`, u)
  }
}
