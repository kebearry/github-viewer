import { GithubService } from './../../services/github.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() repositories: [];
  @Input() username: string = '';
  @Input() readMeDetails: String;
  @Input() onSelection: (repositoryName, username) => {};
  @Input() progress: Number;
  @Output() progressEvent = new EventEmitter<Number>();

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
  }

  public getDetails(repositoryName, username) {
    if (this.onSelection) {
      this.onSelection(repositoryName, username);
    }
    this.progress = 100;
    this.updateProgress();
  }

  updateProgress(){
    this.progressEvent.emit(this.progress)
  }
}