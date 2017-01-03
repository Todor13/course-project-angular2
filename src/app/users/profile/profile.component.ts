import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from "rxjs/Rx";
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = new User();
  id: string;
  private subscription: Subscription;
  role: string;
  result: string;
  submitted = false;


  constructor(private location: Location,  private activatedRoute: ActivatedRoute,
              private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.id = param['id'];
      });
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

  onSubmit(){
    this.submitted = true;
    console.log('called');
    this.userService.updateUser(this.user, this.id)
      .subscribe(data => {
        this.result = data.result;
        setTimeout(()=> this.router.navigate(['/users', this.id]), 1500);
      });
  }
}
