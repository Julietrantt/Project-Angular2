import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css'],
})
export class CommentSectionComponent implements OnInit {
  listOfComments: any;
  @Input() post_id: any;

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.getPostUserComments();
  }

  getPostUserComments() {
    this.commentsService.getComments().subscribe((comments: any) => {
      this.listOfComments = comments;
      this.listOfComments = this.listOfComments.filter(
        (res: any) => res.postId === this.post_id
      );
    });
  }
}
