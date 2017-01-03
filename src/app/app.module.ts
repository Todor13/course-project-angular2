import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NgbModule } from '../../node_modules/@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserService } from './services/index';
import { ForumComponent } from './forum/forum.component';
import { CreateComponent } from './forum/create-topic/create.component';
import { DetailedComponent } from './forum/detailed-topic/detailed.component';
import { SearchComponent } from './forum/search/search.component';
import { SharedModule } from './shared/shared.module';
import { AuthenticationService } from './services/authentication.service';
import { ForumService } from './services/forum.service';
import { ReactiveFormsModule } from '@angular/forms'
import { AuthGuard } from './common/auth.guard';
import { LoggedService } from './shared/logged.service';
import { NoContentComponent } from'./no-content/no-content.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ProfileComponent } from './users/profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ForumComponent,
    CreateComponent,
    DetailedComponent,
    SearchComponent,
    NoContentComponent,
    UsersComponent,
    UserComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    AuthenticationService,
    ForumService,
    AuthGuard,
    LoggedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
