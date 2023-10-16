import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { authGuard } from "./guards/auth.guard";
import { signupGuard } from "./guards/signup.guard";
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
        canActivate: [authGuard]
    },
    {
        path: 'details/:email',
        component: UserDetailsComponent,
        title: 'Home details',
        canActivate: [authGuard]
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'Signup',
        canActivate: [signupGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    }
]

export default routeConfig