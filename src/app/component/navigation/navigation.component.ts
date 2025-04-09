import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{RouterLink, RouterLinkActive} from '@angular/router'

@Component({
  selector: 'app-navigation',
  imports: [RouterOutlet,RouterLink, RouterLinkActive ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements AfterViewInit  {
ngAfterViewInit(): void {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navList');

    hamburger?.addEventListener('click', () => {
      navList?.classList.toggle('show');
      console.log("CLicked");
    });
  }
// @ViewChild('hamburger') hamburgerRef!: ElementRef;
// @ViewChild('navList') navListRef!: ElementRef;

// ngAfterViewInit(): void {
//   const hamburger = this.hamburgerRef.nativeElement;
//   const navList = this.navListRef.nativeElement;

//   hamburger.addEventListener('click', () => {
//     navList.classList.toggle('show');
//   });
// }

}
