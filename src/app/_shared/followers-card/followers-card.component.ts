import { Component, Input, OnInit } from '@angular/core';
import { Follower } from '../../followers-list/followers-list.component';

@Component({
  selector: 'app-followers-card',
  templateUrl: './followers-card.component.html',
  styleUrls: ['./followers-card.component.less']
})
export class FollowersCardComponent implements OnInit {
@Input() follower:Follower;

  constructor() { }

  ngOnInit(): void {
  }



}
