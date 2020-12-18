import {Component, OnInit} from '@angular/core';
import {UserPostsService} from "../../_core/api/user-posts.service";
import {SortType} from "../../_core/constants/SortType";
import {UserPost, UserPostsFilters} from "../../_core/models/UserPost";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less'],
})
export class FeedComponent implements OnInit {
  feedList: UserPost[];
  userPosts: UserPost[] = [];
  filters: UserPostsFilters = new UserPostsFilters(0, 10,  SortType.FirstNameAscendent);
  loading = true;
  // userPosts: UserPost[] = [
  //   new UserPost(1, 'Catalin', 'vacanta', 'a fost frumos'),
  //   new UserPost(2, 'Mihai', 'ceva', 'a fost oarecum'),
  //   new UserPost(3, 'Maria', 'la munte', 'a fost recea fost recea fost recea fost recea fost recea fost recea fost recea fost recea fost recea fost rece'),
  //   new UserPost(4, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(5, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(6, 'Oana', 'la mare', 'a fost cald'),
  //   new UserPost(7, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(8, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(9, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(10, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(11, 'Mihai', 'ceva', 'a fost oarecum'),
  //   new UserPost(12, 'Catalin', 'vacanta', 'a fost frumos'),
  //   new UserPost(13, 'Maria', 'la munte', 'a fost recea fost recea fost recea fost recea fost recea fost recea fost recea fost recea fost recea fost rece'),
  //   new UserPost(14, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(15, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(16, 'Oana', 'la mare', 'a fost cald'),
  //   new UserPost(17, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(18, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(19, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(20, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(21, 'Mihai', 'ceva', 'a fost oarecum'),
  //   new UserPost(22, 'Catalin', 'vacanta', 'a fost frumos'),
  //   new UserPost(23, 'Maria', 'la munte', 'a fost recea fost recea fost recea fost recea fost recea fost recea fost recea fost recea fost recea fost rece'),
  //   new UserPost(24, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(25, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(26, 'Oana', 'la mare', 'a fost cald'),
  //   new UserPost(27, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(28, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(29, 'Alin', 'la mare', 'a fost cald'),
  //   new UserPost(30, 'Alin', 'la mare', 'a fost cald'),
  // ];

  constructor(
    private userPostsService: UserPostsService,
  ) {
  }

  ngOnInit(): void {
    // this.feedList = this.userPosts.slice(0, this.filters.lastIndex);
    this.getUserPosts();
  }

  getUserPosts() {
    this.loading = true;
    this.userPostsService.getUserPosts(this.filters).subscribe(
      (userPosts: UserPost[]) => {
        this.userPosts = [...this.userPosts, ...userPosts];
        // this.userPosts = this.userPosts.concat(userPosts);
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    );
  }

  showMore() {
    this.filters.page++;
    this.getUserPosts();
    // this.feedList = this.feedList.concat(this.userPosts.slice(this.filters.lastIndex, this.filters.lastIndex + this.filters.size));
    // this.filters.lastIndex = this.filters.lastIndex + this.filters.size;
  }

}
