import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';

@Injectable()
export class TwitterdataService {

    constructor( private http: HttpClient ) { }

    // Setup functions to load API requests to const vars.
    // Then setup placeholders to read values input from user on front end and rerun api query

    // Retrieve JSON API (hashtags), using template model
    getTweetsByHashtag(hashtag: string): Observable<Users[]> {
        const hashUrl = `https://am-twitter-scrape.herokuapp.com/hashtags/${hashtag}?pages_limit=3&wait=0`;
        return this.http.get<Users[]>(hashUrl);
    }

    // Retrieve JSON API (Users), using template model
    getTweetsByUsers(username: string): Observable<Users[]> {
        const userUrl = `http://am-twitter-scrape.herokuapp.com/users/${username}?pages_limit=3&wait=0`;
        return this.http.get<Users[]>(userUrl);
    }
}
