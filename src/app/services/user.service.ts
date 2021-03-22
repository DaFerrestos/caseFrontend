import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { throwError, Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUrl(url: string): Promise<any> {
    return new Promise ((resolve, reject) => {
      this.http.get(url).subscribe(data => {
        resolve(data);
      },
      err => {
        console.log(err);
      });
    });

  }
  getUser(name: string) {
    const url = `https://api.github.com/users/${name}`;
    return this.getUrl(url).then(data => {
      return data;
    });

  }

  getRepos(url: string) {
    const urlRepo = `https://api.github.com/users/${User.login}/repos`;
    return this.getUrl(url).then(data => {
      return data;
    });
  }

  getStarred(user: User) {
    const url = `https://api.github.com/users/${user.login}/starred?`;
    return this.getUrl(url).then(data => {
      return data;
    });
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;
    } else {

      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
