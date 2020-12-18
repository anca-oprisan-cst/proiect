import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_core/services/user.service';
import {User} from "../../_core/models/User";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  token: string;
  firstName: string;

  constructor(private userService: UserService) {
    this.userService.userStream.subscribe((user: User) => {
      this.firstName = user.firstName;
    });
  }

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token');
  }

}
