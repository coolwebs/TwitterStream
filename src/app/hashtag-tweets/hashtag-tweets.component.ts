import { Component, OnInit } from '@angular/core';
import { TwitterdataService } from '../services/twitterdata.service';
import { Observable } from 'rxjs';
import { of as observableOf } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Hashtags } from '../models/hashtags.model';

@Component({
  selector: 'app-hashtag-tweets',
  templateUrl: './hashtag-tweets.component.html',
  styleUrls: ['./hashtag-tweets.component.sass']
})
export class HashtagTweetsComponent implements OnInit {
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
    connect(): Observable<Hashtags[]> {
        return this.twitterdataService.getTweetsByHashtag();
}
    disconnect() {}

}
