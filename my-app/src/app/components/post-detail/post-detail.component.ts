import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  postOne: any;
  PostArray: any;
  Comments: any;
  ArrayComments: any = [];

  constructor(private route: ActivatedRoute, public postService: PostsService) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): any {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost().subscribe((res) => {
      this.PostArray = res;
      let index = this.PostArray.findIndex(
        (p: { id: string }) => p.id == id.toString()
      );
      if (index > -1) {
        this.postOne = this.PostArray[index];
      }
    });
  }
}
