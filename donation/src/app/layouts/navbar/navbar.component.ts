import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  // window.addEventListener("scroll", () => {
  //   const navbar = document.getElementById("navbar") as HTMLElement;
  
  //   if (window.scrollY > 10) {
  //     navbar.classList.add("bg-white", "shadow");
  //     navbar.classList.remove("navbar-light");
  //     navbar.classList.add("navbar-dark");
  //   } else {
  //     navbar.classList.remove("bg-white", "shadow");
  //     navbar.classList.remove("navbar-dark");
  //     navbar.classList.add("navbar-light");
  //   }
  // });
  

  
}
