import { Component, OnInit } from '@angular/core';
import { TwitterdataService } from '../services/twitterdata.service';
import { Observable } from 'rxjs';
import { of as observableOf } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Users } from '../models/users.model';
// import { UserDataSource } from '../hashtag-tweets/hashtag-tweets.component';

@Component({
  selector: 'app-user-tweets',
  templateUrl: './user-tweets.component.html',
  styleUrls: ['./user-tweets.component.sass']
})
export class UserTweetsComponent implements OnInit {

    dataSource = new UserDataSource(this.twitterdataService);
    displayedColumns = ['text', 'likes', 'replies', 'retweets', 'hashtags', 'date'];

    constructor(private twitterdataService: TwitterdataService) {
    }

  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {
    constructor( private twitterdataService: TwitterdataService ) {
        super();
    }
    connect(): Observable<Users[]> {
        return this.twitterdataService.getTweetsByUsers();
    }
    disconnect() {}

}
