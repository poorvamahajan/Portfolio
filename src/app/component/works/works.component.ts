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
      GitUrl: "https://github.com/poorvamahajan/Portfolio",
      TechStack: "Angular, Typescript, Html, CSS, Javascript",
      ProjectUrl : "https://www.google.co.in/"
    },
    {
      Name: 'Research Consultancy(MCA third Year Project)',
      GitUrl: "https://github.com/poorvamahajan/Research-Consultancy-Portal",
      TechStack: "PHP, HTML, CSS, Javascript, MYSQL"
    },
    {
      Name: 'E-Voting',
      GitUrl: "",
      TechStack: "",
      Description: ""
    }
  ];
}
