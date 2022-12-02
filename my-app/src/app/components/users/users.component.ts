import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  Users: any;
  UserOne: any;
  @Input() user_id: any;

  constructor(public postsUser: UsersService) {}

  ngOnInit(): void {
    this.getPostUser();
  }

  getPostUser() {
    this.postsUser.getUsers().subscribe((users) => {
      this.Users = users;
      let index = this.Users.findIndex(
        (u: { id: string }) => u.id == this.user_id
      );
      if (index > -1) {
        this.UserOne = this.Users[index];
      }
    });
  }
}
