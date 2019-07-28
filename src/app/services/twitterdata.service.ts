import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';

@Injectable()
export class TwitterdataService {

    // setup custom placeholder vars that will be binded to search input field
    // They will modify the declared JSON APIs below
    private myCustomHashtag:string = 'Python';
    private myCustomUser:string = 'Twitter';

    // Load JSON APIs via HttpClient and set them up with obervables (models)
    private hashtagsUrl:string = 'https://am-twitter-scrape.herokuapp.com/hashtags/Python?pages_limit=3&wait=0';
    private usersUrl:string = `http://am-twitter-scrape.herokuapp.com/users/Twitter?pages_limit=3&wait=0`;

    constructor( private http: HttpClient ) { }

    // Retrieve JSON API (hashtags), using template model
    getTweetsByHashtag(): Observable<Users[]> {
        return this.http.get<Users[]>(this.hashtagsUrl);
    }

    // Retrieve JSON API (Users), using template model
    getTweetsByUsers(): Observable<Users[]> {
        return this.http.get<Users[]>(this.usersUrl);
    }
}
