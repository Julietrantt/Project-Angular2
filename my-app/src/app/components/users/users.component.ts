import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Users:any;
  UserOne:any;
  @Input() user_id: any

  constructor(private http: HttpClient, public post: PostsService) { }

  ngOnInit(): void {
    this.getPostUser()
  }

  getPostUser () {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => {
        this.Users = users
        let index = this.Users.findIndex(
          (u: { id: string }) => u.id == this.user_id
        )
        if (index > -1) {
          this.UserOne = this.Users[index]
        }
      })
  }
}

