import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'twitterstream';

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get('https://am-twitter-scrape.herokuapp.com/hashtags/Python?pages_limit=3&wait=0').subscribe(data => {
            console.log(data);
        });
    }
}
