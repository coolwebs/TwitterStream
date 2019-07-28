import {Component, OnInit, ViewChild} from '@angular/core';
import { TwitterdataService } from '../services/twitterdata.service';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-user-tweets',
  templateUrl: './user-tweets.component.html',
  styleUrls: ['./user-tweets.component.sass']
})
export class UserTweetsComponent implements OnInit {

    dataSource = new MatTableDataSource<Users>();
    displayedColumns = ['text', 'likes', 'replies', 'retweets', 'hashtags', 'date'];

    length = 50;
    pageSize = 10;
    pageSizeOptions = [5, 10, 20];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor( private twitterdataService: TwitterdataService ) {
    }

  ngOnInit() {
      this.twitterdataService.getTweetsByUsers().subscribe(
          data => this.dataSource.data = data
      );
  }

  ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
  }

}
