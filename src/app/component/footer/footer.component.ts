import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footer = {
    socialMediaHandle: [
      { ImageLocation: "../assets/images/icons/icons8-instagram.svg", url: "https://www.instagram.com/__.poorva.__/" },
      { ImageLocation: "../assets/images/icons/icons8-linkedin-480.svg", url: "https://www.linkedin.com/in/poorva-mahajan-66455b22b/" },
      { ImageLocation: "../assets/images/icons/icons8-github-288.svg", url: "https://github.com/poorvamahajan" },
      { ImageLocation: "../assets/images/icons/icons8-leetcode-96.png", url: "https://leetcode.com/u/poorvam14/" },
    ]
  }
}
