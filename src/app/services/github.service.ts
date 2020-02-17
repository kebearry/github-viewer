import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class GithubService {

    constructor(private http: HttpClient){}

    fetchRepositories(username){
        return this.http.get('https://api.github.com/users/'+username+'/repos')
    }

    fetchReadme(repositoryName, username){
        return this.http.get('https://api.github.com/repos/'+username+'/'+repositoryName+'/readme')
    }
}