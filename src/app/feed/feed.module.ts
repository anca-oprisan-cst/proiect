import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeedRoutingModule} from './feed-routing.module';
import {FeedComponent} from "./feed/feed.component";
import {UserPostComponent} from "./user-post/user-post.component";
import {SharedModule} from "../_shared/shared.module";


@NgModule({
  declarations: [
    FeedComponent,
    UserPostComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
  ]
})
export class FeedModule {
}
