import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList:any;
  userList$:any;

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {

  }

  getUsers():void {
    this.userList$ = this.usersService.getUsersList().pipe(tap((users)=>(this.userList = users)));
  }
}
