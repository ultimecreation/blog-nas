import { Component } from '@angular/core';
import { PostListComponent } from "../../components/posts/post-list/post-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
