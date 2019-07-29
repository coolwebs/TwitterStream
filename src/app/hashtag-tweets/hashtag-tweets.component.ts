import { Component, ViewChild, OnInit } from '@angular/core';
import { TwitterdataService } from '../services/twitterdata.service';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-hashtag-tweets',
  templateUrl: './hashtag-tweets.component.html',
  styleUrls: ['./hashtag-tweets.component.sass']
})
export class HashtagTweetsComponent implements OnInit {

    dataSource = new MatTableDataSource<Users>();
    displayedColumns = ['text', 'likes', 'replies', 'retweets', 'hashtags', 'date'];

    convertDate(rawDate: string): string {
        const dateOnly = rawDate.split('-')[1].trim();
        const [day, month, year] = dateOnly.split(' ');
        return `${month} ${day}, ${year}`;
    }

    // Setup pagination attr
    length = 50;
    pageSize = 10;
    pageSizeOptions = [5, 10, 20];

    @ViewChild( MatPaginator ) paginator: MatPaginator;

    constructor( private twitterdataService: TwitterdataService ) {
    }

    ngOnInit() {
        this.twitterdataService.getTweetsByHashtag().subscribe(
            data => this.dataSource.data = data
        );
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }
}