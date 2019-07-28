import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hashtags } from '../models/hashtags.model';
import { Users } from '../models/users.model';

@Injectable()
export class TwitterdataService {

    private hashtagsUrl = 'https://am-twitter-scrape.herokuapp.com/hashtags/Python?pages_limit=3&wait=0';
    private usersUrl = 'http://am-twitter-scrape.herokuapp.com/users/Twitter?pages_limit=3&wait=0';

    constructor( private http: HttpClient ) { }

    getTweetsByHashtag(): Observable<Hashtags[]> {
        return this.http.get<Hashtags[]>(this.hashtagsUrl);
    }

    getTweetsByUsers(): Observable<Users[]> {
        return this.http.get<Users[]>(this.usersUrl);
    }
}
