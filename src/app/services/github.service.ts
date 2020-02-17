import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class GithubService {
    public readMeDetails: String = ''

    constructor(private http: HttpClient) {
    }

    fetchRepositories(username) {
        return this.http.get('https://api.github.com/users/' + username + '/repos').pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    getDetails() {
        return this.readMeDetails;
    }

    fetchReadme(repositoryName, username) {
        return this.http.get('https://api.github.com/repos/' + username + '/' + repositoryName + '/readme').subscribe((result: any) => {
            if (result.content) {
                this.readMeDetails = atob(result.content);
            }
            this.getDetails();
        })
    }

    handleError(error: HttpErrorResponse){
        console.log("lalalalalalalala");
        return throwError(error);
    }
}