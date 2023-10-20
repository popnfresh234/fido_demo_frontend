import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { authGuard } from "./guards/auth.guard";
import { signupGuard } from "./guards/signup.guard";
import { NewsDetailsComponent } from "./news-details/news-details.component";
import { NewsEditComponent } from "./news-edit/news-edit.component";
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
        canActivate: [authGuard]
    },
    {
        path: 'news/edit',
        component: NewsEditComponent,
        title: 'Edit News',
        canActivate: [authGuard]
    },
    {
        path: 'news/:id',
        component: NewsDetailsComponent,
        title: "News Article",
        canActivate: [authGuard],
    },
    {
        path: 'user',
        component: UserDetailsComponent,
        title: 'User details',
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