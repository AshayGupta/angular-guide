import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isChangingRoute: boolean = false;

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart || event instanceof RouteConfigLoadStart) {
        this.isChangingRoute = true;
      }
      if(event instanceof NavigationEnd || event instanceof RouteConfigLoadEnd) {
        this.isChangingRoute = false;
      }
    });
  }
}
