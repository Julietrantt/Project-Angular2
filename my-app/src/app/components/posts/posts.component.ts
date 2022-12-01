import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postList:any;
  postList$:any;

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts():void {
    this.postList$ = this.postsService.getPostsList().pipe(tap((posts)=>(this.postList = posts)));
  }

}
