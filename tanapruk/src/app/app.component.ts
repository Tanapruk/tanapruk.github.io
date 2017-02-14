import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  dashboardLinkList = [
    {description: 'My Old Sketch', href: '/archives/index.html'},
    {description: 'pizza-1', href: '/archives/basiccalculator.html'},
    {description: 'tacos-2', href: 'Tacos'}
  ];
}
