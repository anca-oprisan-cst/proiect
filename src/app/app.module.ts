import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserPostDetailsComponent} from './user-post-details/user-post-details.component';
import { HttpClientModule} from '@angular/common/http';
import {FollowersListComponent} from './followers-list/followers-list.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {FileUploadModule} from 'ng2-file-upload';
import {SharedModule} from "./_shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    UserPostDetailsComponent,
    FollowersListComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    FileUploadModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
