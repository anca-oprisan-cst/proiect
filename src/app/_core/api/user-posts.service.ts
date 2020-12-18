import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserPostsFilters} from "../models/UserPost";


@Injectable({
  providedIn: 'root'
})
export class UserPostsService {
  private readonly resourceUrl: string = "/UserPosts";
  private readonly baseUrl: string = environment.server;

  constructor(private http: HttpClient) {
  }

  // url = localhost:54444/UserPosts?size=10&page=0
  getUserPosts(filters: UserPostsFilters) {
    const params: HttpParams = new HttpParams()
      .set('pageSize', filters.size.toString())
      .set('pageNumber', filters.page.toString())
      .set('sortType', filters.sortType.toString());
    return this.http.get(`${this.baseUrl}${this.resourceUrl}`, {params: params});
  }
}
