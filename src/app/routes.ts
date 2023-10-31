import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { signupGuard } from './guards/signup.guard';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { adminGuard } from './guards/admin.guard';
import { RecoveryComponent } from './recovery/recovery.component';
import { RecoveryCodeComponent } from './recovery-code/recovery-code.component';
import { RecoveryResetComponent } from './recovery-reset/recovery-reset.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'news/edit',
    component: NewsEditComponent,
    title: 'Edit News',
    canActivate: [authGuard],
  },
  {
    path: 'news/:id',
    component: NewsDetailsComponent,
    title: 'News Article',
    canActivate: [authGuard],
  },
  {
    path: 'user',
    component: UserDetailsComponent,
    title: 'User details',
    canActivate: [authGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup',
    canActivate: [signupGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'recovery',
    component: RecoveryComponent,
    title: 'Recovery',
  },
  {
    path: 'recovery/code/:account',
    component: RecoveryCodeComponent,
    title: 'Recovery code',
  },
  {
    path: 'recovery/rest/:account/:code',
    component: RecoveryResetComponent,
    title: 'Reset Password',
  },
];

export default routeConfig;
