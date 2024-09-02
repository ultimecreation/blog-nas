import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostAddComponent } from './components/posts/post-add/post-add.component';
import { authRequiredGuard } from './guards/auth-required.guard';
import { PostEditComponent } from './components/posts/post-edit/post-edit.component';
import { PostSingleComponent } from './components/posts/post-single/post-single.component';
import { PostShowComponent } from './components/posts/post-show/post-show.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'posts/add', component: PostAddComponent, canActivate: [authRequiredGuard] },
    { path: 'posts/edit/:id', component: PostEditComponent, canActivate: [authRequiredGuard] },
    { path: 'posts/show/:id', component: PostShowComponent, canActivate: [authRequiredGuard] },
    { path: '', component: PostListComponent },
];
