import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css'],
})
export class CommentSectionComponent implements OnInit {
  listOfComments: any
  @Input() post_id: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPostUserComments();
  }

  getPostUserComments() {
    this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((comments: any) => {
        this.listOfComments = comments
        this.listOfComments = this.listOfComments.filter((res: any) => res.postId === this.post_id)
      });
  }
}
