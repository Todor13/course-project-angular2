import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../common/auth.guard'
import { AuthenticationService } from "../services/authentication.service";
import { LoggedService } from '../shared/logged.service';
import { Logged } from '../../models/logged';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isIn = false;
  username: string;
  logged: Logged;
  id: string;

  constructor(private authGuard: AuthGuard, private authService: AuthenticationService,
  private loggedService: LoggedService){

  }



  ngOnInit(){
    if (this.isLogged()){
      this.getCurrentUser();
    }
    this.loggedService.getLogged().subscribe(logged => {
      this.logged = logged;
      this.username = this.logged.username;
      this.id = this.logged.id;
    })
  }

  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  isLogged(): boolean{
    return this.authGuard.canActivate();
  }

  logOut(){
    this.authService.logout();
  }

  getCurrentUser(){
    var json;

    if (localStorage.getItem('currentUser')){
      json = JSON.parse(localStorage.getItem('currentUser'));
      this.username = json.username;
      this.id = json.id;
    }

  }
}
