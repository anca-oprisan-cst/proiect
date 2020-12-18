import {SortType} from "../constants/SortType";

export class UserPost {
  title: string;
  description: string;
  userName: string;
  id: number;

  constructor(
    id: number,
    userName: string,
    title: string,
    description: string
  ) {
    this.id = id;
    this.description = description;
    this.title = title;
    this.userName = userName;
  }
}

export class UserPostsFilters {
  page: number;
  size: number;
  sortType: SortType;

  constructor(page: number, size: number, sortType: SortType) {
    this.page = page;
    this.size = size;
    this.sortType = sortType;
  }
}

// SAU
// export class UserPostsFilters {
//   constructor(
//     public page: number,
//     public size: number,
//     public sortType: SortType) {
//   }
// }

