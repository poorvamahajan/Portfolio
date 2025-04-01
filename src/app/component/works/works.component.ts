import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  project = [
    {
      Name: 'Portfolio',
      url: "",
      TechStack: "Angular, Typescript, Html, CSS, Javascript"
    },
    {
      Name: 'Research Consultancy(MCA third Year Project)',
      url: "https://github.com/poorvamahajan/Research-Consultancy-Portal",
      TechStack: "PHP, HTML, CSS, Javascript, MYSQL"
    },
    {
      Name: 'E-Voting',
      url: "",
      TechStack: "",
      Description: ""
    }
  ];
}
