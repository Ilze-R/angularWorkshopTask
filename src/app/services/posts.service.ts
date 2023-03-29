import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  addPost(post: Post) {
    return this.httpClient.post<Post>('/api/posts', post);
  }

  findPostsByTitle(title: string) {
    return this.httpClient.get<Post[]>(`/api/posts?title=${title}`);
  }

  fetchPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('/api/posts');
  }

  getSinglePost(id: number): Observable<Post[]> {
    return this.route.paramMap.pipe(
      switchMap((params) => {
        const postId = Number(params.get('id'));
        return this.httpClient.get<Post[]>(`/api/posts/${postId}`);
      }),
    );
  }

  getPosts() {
    return this.httpClient.get<Post[]>('/api/posts');
  }
}
