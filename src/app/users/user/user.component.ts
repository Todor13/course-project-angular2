import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from "rxjs/Rx";
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = new User();
  id: string;
  private subscription: Subscription;
  role: string;
  isProfile = false;

  constructor(private location: Location,  private activatedRoute: ActivatedRoute,
  private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.id = param['id'];
      });
    let userId = this.getUserId();
    if (userId == this.id){
      this.isProfile = true;
    }
    this.userService.getUserById(this.id)
      .subscribe(
        data => {
          this.user.username = data.result.username;
          this.user.firstname = data.result.firstname;
          this.user.lastname = data.result.lastname;
          this.user.email = data.result.email;
          this.role = data.result.role;
        });
  }

  backClicked() {
    this.location.back();
  }

  getUserId(): string{
    var json;

    if (localStorage.getItem('currentUser')){
      json = JSON.parse(localStorage.getItem('currentUser'));
      return json.id;
    }
  }
}
