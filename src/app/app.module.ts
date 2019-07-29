// Core angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import remote data feed
import { HttpClientModule } from '@angular/common/http';

// Material Design Modules for the display
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Components for tabbed display of tweets
import { HashtagTweetsComponent } from './hashtag-tweets/hashtag-tweets.component';
import { UserTweetsComponent } from './user-tweets/user-tweets.component';

// Twitter API data services and customize display
import { TwitterdataService } from './services/twitterdata.service';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HashtagTweetsComponent,
    UserTweetsComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [TwitterdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
