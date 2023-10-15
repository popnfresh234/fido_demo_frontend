import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { authGuard } from "./auth.guard";
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
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    }
]

export default routeConfig