import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  addPost(post: Post) {
    return this.httpClient.post<Post>('/api/posts', post);
  }

  findPostsByTitle(title: string) {
    return this.httpClient.get<Post[]>(`/api/posts?title=${title}`);
  }

  fetchPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('/api/posts');
  }

  // fetchPosts() {
  //   this.httpClient
  //     .get<Post>('https://www.npmjs.com/package/json-server')
  //     .subscribe((res) =>
  //     // this.loadedPosts = res;
  //     console.log('res', res));
  // let searchParams = new HttpParams();
  // searchParams = searchParams.append('print', 'pretty');
  // searchParams = searchParams.append('custom', 'key');
  // return this.httpClient
  //   .get<{ [key: string]: Post }>(
  //     '(https://www.npmjs.com/package/json-server',
  //     {
  //       headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
  //       params: searchParams,
  //       responseType: 'json',
  //     },
  //   )
  //   .pipe(
  //     map((responseData) => {
  //       const postsArray: Post[] = [];
  //       for (const key in responseData) {
  //         if (responseData.hasOwnProperty(key)) {
  //           postsArray.push({ ...responseData[key], id: key });
  //         }
  //       }
  //       return postsArray;
  //     }),
  //     catchError((errorRes) => {
  //       // Send to analytics server
  //       return throwError(errorRes);
  //     }),
  //   );
  // }
}
