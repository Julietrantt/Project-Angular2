import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {  PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  Comments: any
  CommentOne: any
  Count: any
  @Input() post_id: any
  constructor(private http: HttpClient, public post: PostsService) { }

  ngOnInit(): void {
    this.getPostUserComments()

  }

  getPostUserComments () {
    this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe(comments => {
        this.Comments = comments
        let index = this.Comments.findIndex(
          (c: { postId: string }) => c.postId == this.post_id
        )

        this.Count = this.Comments.filter((res: any) => res.postId === this.post_id).length

        if (index > -1) {
          this.CommentOne = this.Comments[index]
        }
        
      })
  }
  
  }

