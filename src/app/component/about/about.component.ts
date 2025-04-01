import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about ={
    aboutme : "Hi, I'm Poorva, a C# .NET developer with a focus on robust Windows applications and services. My skills extend to SQLite, HTML/CSS, and C, particularly within the security domain. I'm driven by continuous learning and currently exploring modern web development. Let's connect!",
    Experience :[{
      JobName : "Network Marvels", 
      Designation : "Software Engineer", 
      TimePeriod : "October, 2022 - PRESENT", 
      Description : "In my current role as a Software Engineer, I'm deeply involved in developing secure and scalable Pre-Boot Authentication systems. My responsibilities include leveraging the .NET Framework and C# to build robust services. I design and implement REST APIs for efficient data exchange and utilize SQLite for local database management. A critical aspect of my work is the integration of encryption and decryption mechanisms to ensure data security. I also develop MVVM applications to enhance user experience. My technical toolkit includes C#, InstallShield for deployment, and Git for version control, all within a security-focused environment."

    }
    ],
    Education : [{
      Name : "Vivekanand Education Society of Information Technology",
      Course : "Masters in Computer Application",
      TimePeriod : "2019-2022",
      FinalResult :"CGPA:9.01"
    },
    {
      Name : "Model College",
      Course : "Bachelors in Information Technology",
      TimePeriod : "2016-2019",
      FinalResult :"CGPA:9.01"
    }
  ]
  }
}
