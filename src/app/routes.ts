import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { SignupComponent } from "./signup/signup.component";
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:username',
        component: UserDetailsComponent,
        title: 'Home details',
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'Signup',
    }
]

export default routeConfig