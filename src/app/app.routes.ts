import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostAddComponent } from './components/posts/post-add/post-add.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'posts/add', component: PostAddComponent },
    { path: '', component: PostListComponent },
];
