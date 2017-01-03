import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {URLSearchParams} from '@angular/http';
import {Subscription} from "rxjs/Rx";

const PageSize = 3;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
  count = [];
  page: string;
  private subscription: Subscription;

  constructor(private userService: UserService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.count = [];
        this.page = queryParam['page'];
        let params = new URLSearchParams();
        params.set('page', this.page);
        this.getUsers(params);
      });
  }

  getUsers(params: any){
    this.userService.getAllUsers(params)
      .subscribe(
        data => {
          this.users = data.result.users;
          this.calculatePages(data.result.count);
        }
      );
  }

  calculatePages(count){
    this.count = [];
    if (count <= PageSize){
      this.count.push(1).toString();
    }else{
      for (let i = 1; i <= Math.ceil(count/PageSize); ++i) {
        this.count.push(i).toString();
      }
    }
  }

}
