import { GithubService } from './../../services/github.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  username: string = '';
  progress: Number = 35;
  repositories: []
  readMeDetails;

  constructor(public _githubService: GithubService) {
  }

  public getGitInfo() {
    this._githubService.fetchRepositories(this.username).subscribe((result: any) => {
      this.repositories = result;
      if (result.length > 0) {
        this.progress = 70;
      }
    })
  }

  public getDetails(repositoryName, username) {
    this._githubService.fetchReadme(repositoryName, username);
  }

  public goBackInProgress() {
    if (this.progress = 70) {
      this.progress = 35;
    } else if (this.progress = 100) {
      this.progress = 70;
    }
  }

  ngOnInit() {
    this._githubService.getDetails();
  }

  receiveUpdate($event) {
    this.progress = $event;
  }
}
