import { CardComponent } from './../../components/card/card.component';
import { GithubService } from './../../services/github.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @ViewChild(CardComponent, {static: false}) card;

  username: string = '';
  progress: Number = 35;
  repositories: []
  readMeDetails: string = ''

  constructor(private _githubService: GithubService) { }

  public getGitInfo() {
    this._githubService.fetchRepositories(this.username).subscribe((result: any) => {
      this.repositories = result;
      if (result.length > 0) {
        this.progress = 70;
      }
    })
  }

  public getDetails(repositoryName, username) {
    this._githubService.fetchReadme(repositoryName, username).subscribe((result: any) => {
      if (result.content) {
        this.readMeDetails = atob(result.content);
        this.progress = 100;
      }
    })
  }

  ngOnInit() {
  }

  // ngAfterViewInit() {
  //   this.progress = this.card.progress
  // }

  receiveUpdate($event) {
    this.progress = this.progress
  }

}
