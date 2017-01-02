import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForumComponent } from './forum/forum.component';
import { CreateComponent } from './forum/create-topic/create.component';
import { DetailedComponent } from './forum/detailed-topic/detailed.component';
import { SearchComponent } from './forum/search/search.component';
import { AuthGuard } from './common/auth.guard';
import { NoContentComponent } from './no-content/no-content.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';


export const AppRoutes: Routes = [
    { path: '',      component: HomeComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forum', component: ForumComponent },
    { path: 'forum/create', component: CreateComponent, canActivate: [AuthGuard] },
    { path: 'forum/search', component: SearchComponent },
    { path: 'forum/:id', component: DetailedComponent },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'users/:id', component: UserComponent, canActivate: [AuthGuard] },
    { path: '**',    component: NoContentComponent }
];
