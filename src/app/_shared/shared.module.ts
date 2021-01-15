import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TruncatePipePipe} from "./pipes/truncate-pipe.pipe";
import {FollowersCardComponent} from "./followers-card/followers-card.component";


@NgModule({
  declarations: [
    TruncatePipePipe,
    FollowersCardComponent,
  ],
  exports: [
    TruncatePipePipe,
    FollowersCardComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule {
}
