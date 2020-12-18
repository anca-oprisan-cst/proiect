import {Component, Inject, Input, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {UserPost} from "../../_core/models/UserPost";

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.less'],
})
export class UserPostComponent implements OnInit {
  @Input() userPost: UserPost;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  goToUserPostDetails() {
    this.router.navigate(['user-post-details/' + this.userPost.id]);
  }
}
