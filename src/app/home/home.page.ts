import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title="Wallet";
  decription="Money Transfer wallet & Finace UI Kit";

  constructor(private router:Router) {}

  goToPage() {
    this.router.navigate(['/onboarding']);
  }


}
