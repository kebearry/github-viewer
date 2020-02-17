import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class GithubService {
    public readMeDetails: String = ''

    constructor(private http: HttpClient) {
    }

    fetchRepositories(username) {
        return this.http.get('https://api.github.com/users/' + username + '/repos')
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
}