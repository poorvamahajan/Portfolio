import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{RouterLink, RouterLinkActive} from '@angular/router'
import { HeaderComponent } from './component/header/header.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { IntroComponent } from './component/intro/intro.component';
import { AboutComponent } from './component/about/about.component';
import { ExpertiseComponent } from './component/expertise/expertise.component';
import { CareerComponent } from './component/career/career.component';
import { WorksComponent } from './component/works/works.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent,NavigationComponent,
              IntroComponent,AboutComponent,ExpertiseComponent,CareerComponent,WorksComponent,ContactComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NewWebsite';
}
