import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Posts } from 'src/app/Interfaces/post';
import { User } from 'src/app/Interfaces/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  PostArray: Posts[] = []
  UserArray: User[] = []

  constructor(private http: HttpClient, public postsService: PostsService) { }

  ngOnInit(): void {
    var ar = this.getPost()
  }

  getPost (): any {
    this.postsService.getPost().subscribe(res => {
      for (let key in res) {
        let p: Posts
        p = res[key]
        this.PostArray.push(p)
      }
    })
  }

}
