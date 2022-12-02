import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Posts, PostsService, User } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  PostArray: Posts[] = []
  UserArray: User[] = []

  constructor(private http: HttpClient, public post: PostsService) { }

  ngOnInit(): void {
    var ar = this.getPost()
  }

  getPost (): any {
    this.post.getPost().subscribe(res => {
      for (let key in res) {
        let p: Posts
        p = res[key]
        this.PostArray.push(p)
      }
    })
  }

}
