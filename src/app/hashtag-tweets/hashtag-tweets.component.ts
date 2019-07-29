import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { TwitterdataService } from '../services/twitterdata.service';
import { Users } from '../models/users.model';
import { Observable, of, fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, filter } from 'rxjs/internal/operators';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-hashtag-tweets',
  templateUrl: './hashtag-tweets.component.html',
  styleUrls: ['./hashtag-tweets.component.sass']
})
export class HashtagTweetsComponent implements OnInit {

    dataSource = new MatTableDataSource<Users>();
    isLoading = true; // for table data preloader
    displayedColumns = ['text', 'likes', 'replies', 'retweets', 'hashtags', 'date'];

    // Setup pagination attr
    length = 50;
    pageSize = 10;
    pageSizeOptions = [5, 10, 20];
    @ViewChild( MatPaginator ) paginator: MatPaginator;

    // Setup element reference for the search field
    @ViewChild('hashtagsSearchInput') hashtagsSearchInput: ElementRef;
    isSearching:boolean;

    // Trim and reformat date string (unfortunately not already a date object to start with)
    convertDate(rawDate: string): string {
        const dateOnly = rawDate.split('-')[1].trim();
        const [day, month, year] = dateOnly.split(' ');
        return `${month} ${day}, ${year}`;
    }

    constructor( private twitterdataService: TwitterdataService ) {
    }

    ngOnInit() {

        // Query the api using the data service and pull it into dataSource for Mat table
        // Give the default hashtag to display tweets from on first view
        this.twitterdataService.getTweetsByHashtag('Python').subscribe(
            data => {
                this.isLoading = false;
                this.dataSource.data = data
            },
            error => this.isLoading = false
        );

        // Listen to the user input on search field and update results
        fromEvent(this.hashtagsSearchInput.nativeElement, 'keyup').pipe(
            // get value
            map((event: any) => {
                return event.target.value;
            })
            // if character length greater then 2
            ,filter(res => res.length > 2)
            // Time in milliseconds between key events (wait until run search)
            ,debounceTime(1000)
            // If previous query is diffent from current
            ,distinctUntilChanged()
            // subscription for response
        ).subscribe((hashtag: string) => {
            this.isSearching = true;
            // console.log(hashtag);
            // If user input change is success, query the api again with user input value
            this.twitterdataService.getTweetsByHashtag(hashtag).subscribe(
                data => {
                    console.log(data);
                    this.dataSource.data = data;
                }
            );
                this.isSearching = false;
            },(err)=>{
                this.isSearching = false;
                console.log('error',err);
            });
        }

        ngAfterViewInit(): void {
            // Add the MatTable paginator after view init
            this.dataSource.paginator = this.paginator;
        }
    }