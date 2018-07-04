import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

/**
 *
 */
constructor(public route: ActivatedRoute, public router: Router) {
 
}
    showCarDealers() {
    this.router.navigate(['/dealers']);
  }

    showCarMakes() {
    this.router.navigate(['/makes']);
  }
    showCarModels() {
    this.router.navigate(['/models']);
  }
    showCars() {
    this.router.navigate(['/cars']);
  }
}
