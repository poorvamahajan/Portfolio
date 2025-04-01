import { Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { IntroComponent } from './component/intro/intro.component';
import { AboutComponent } from './component/about/about.component';
import { ExpertiseComponent } from './component/expertise/expertise.component';
import { CareerComponent } from './component/career/career.component';
import { WorksComponent } from './component/works/works.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
export const routes: Routes = [

    {title:"Poorva : Header",path:'header',component:HeaderComponent},
    {title:"Poorva : Intro",path:'intro',component:IntroComponent},
    {title:"Poorva : About",path:'about',component:AboutComponent},
    {title:"Poorva : Expertise",path:'expertise',component:ExpertiseComponent},
    {title:"Poorva : Qualification & Experience",path:'career',component:CareerComponent},
    {title:"Poorva : Works",path:'works',component:WorksComponent},
    {title:"Poorva : Contact",path:'contact',component:ContactComponent} 
];
