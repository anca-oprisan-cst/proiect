import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserPost} from "../_core/models/UserPost";

@Component({
  selector: 'app-user-post-details',
  templateUrl: './user-post-details.component.html',
  styleUrls: ['./user-post-details.component.less'],
})
export class UserPostDetailsComponent implements OnInit {
  id: string;
  @Input() userPost: UserPost;


  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.activatedRoute);
  }
}
