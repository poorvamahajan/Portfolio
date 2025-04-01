import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  intro = {
    title : "Hello World",
    introduction1 :" I am Poorva, ",
    introduction2 :"a Software Engineer.",
    socialMediaHandles  : [
      {Name : "Instagram", Url : "https://www.instagram.com/__.poorva.__/"},
      {Name : "LinkedIn", Url : "https://www.linkedin.com/in/poorva-mahajan-66455b22b/"},
      {Name : "LeetCode", Url : "https://leetcode.com/u/poorvam14/"},
      {Name : "GitHub", Url : "https://github.com/poorvamahajan"},

    ]
  }
  // socialMedialHandles = {
  //   LinkedIn : "LinkedIn",
  //   LeetCode : "LeetCode",
  //   GitHub : "GitHub",
  //   Instagram : "Instagram"
  // }
  // socialMediaHandleUrl = {
  //   LinkedIn : "https://www.linkedin.com/in/poorva-mahajan-66455b22b/",
  //   LeetCode : "https://leetcode.com/u/poorvam14/",
  //   GitHub : "https://github.com/poorvamahajan",
  //   Instagram : "https://www.instagram.com/__.poorva.__/"
  // }
  
}
