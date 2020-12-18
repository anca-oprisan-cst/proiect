import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.less']
})
export class FollowersListComponent implements OnInit {
  followersList:Follower[];
  filters={
    page:0,
    size:5,
    lastIndex:5,
    sortOption:SortOptions.FIRST_NAME
  };
  followers:Follower[] = [
    new Follower("crist","andrei","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
    new Follower("alexandra","ana","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
    new Follower("bogdan","alin","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
    new Follower("stefania","andrei","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
    new Follower("marian","alex","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
    new Follower("maria","andrei","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
    new Follower("bogdan","alin","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
    new Follower("stefania","andrei","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
    new Follower("marian","alex","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
    new Follower("maria","andrei","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
    new Follower("bogdan","alin","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
    new Follower("stefania","andrei","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
    new Follower("marian","alex","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
    new Follower("maria","andrei","https://muntiiromaniei.ro/wp-content/uploads/2018/09/Ziua-Muntelui-Zbor-peste-Muntii-Romaniei-6.jpg"),
  ]

  constructor() { }

  ngOnInit(): void {
    this.followersList=this.followers.slice(0,this.filters.lastIndex);
  }

  loadMore(){
    this.filters.page++;
    this.followersList=this.followersList.concat(this.followers.slice(this.filters.lastIndex,this.filters.lastIndex+this.filters.size));
    this.filters.lastIndex=this.filters.lastIndex+this.filters.size;
  }
}
export enum SortOptions{
  FIRST_NAME,
  LAST_NAME
}

export class Follower{
  firstName:string;
  lastName:string;
  profilePicture:string;

  constructor(firstName:string, lastName:string, profilePicture:string){
    this.firstName=firstName;
    this.lastName=lastName;
    this.profilePicture=profilePicture;
  }
}