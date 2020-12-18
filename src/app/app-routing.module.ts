import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'; // CLI imports router
import {FeedComponent} from './feed/feed/feed.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RegisterComponent} from './user/register/register.component';
import {UserPostDetailsComponent} from './user-post-details/user-post-details.component';
import {AuthGuardService} from './_core/guards/auth-guard.service';
import {LoginComponent} from './user/login/login.component';
import {FollowersListComponent} from './followers-list/followers-list.component';
import {ProfileComponent} from './user/profile/profile.component';
import {UserModule} from "./user/user.module";

const routes: Routes = [
  // { path: '', redirectTo: 'register', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'feed',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)
  },
  {
    path: 'user-post-details/:id',
    canActivate: [AuthGuardService],
    component: UserPostDetailsComponent,
  },
  {
    path: 'followers',
    canActivate: [AuthGuardService],
    component: FollowersListComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
