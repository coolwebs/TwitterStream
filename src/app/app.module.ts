import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import remote data feed
import { HttpClientModule } from '@angular/common/http';

// Material Design Modules for tabbed display
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

// Components for tabbed display of tweets
import { HashtagTweetsComponent } from './hashtag-tweets/hashtag-tweets.component';
import { UserTweetsComponent } from './user-tweets/user-tweets.component';

@NgModule({
  declarations: [
    AppComponent,
    HashtagTweetsComponent,
    UserTweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
