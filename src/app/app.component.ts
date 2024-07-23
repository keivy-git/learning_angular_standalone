import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import {RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent,
    RouterOutlet
  ]
})
export class AppComponent {
  title = 'homes';
}
