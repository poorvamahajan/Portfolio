import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{RouterLink, RouterLinkActive} from '@angular/router'

@Component({
  selector: 'app-navigation',
  imports: [RouterOutlet,RouterLink, RouterLinkActive ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
