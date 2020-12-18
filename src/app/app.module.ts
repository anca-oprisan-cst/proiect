import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {RegisterComponent} from './user/register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FeedComponent} from './feed/feed/feed.component';
import {UserPostComponent} from './feed/user-post/user-post.component';
import {UserPostDetailsComponent} from './user-post-details/user-post-details.component';
import {TruncatePipePipe} from './_shared/pipes/truncate-pipe.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FollowersListComponent} from './followers-list/followers-list.component';
import {FollowersCardComponent} from './followers-card/followers-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    UserPostDetailsComponent,
    FollowersListComponent,
    FollowersCardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
