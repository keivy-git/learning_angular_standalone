import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {IHousingLocation} from "../interface/housing-location";
import {HousingService} from "../services/housing.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private housingService = inject(HousingService);
  housingLocationList: IHousingLocation[] = [];

ngOnInit() {
  this.housingLocationList = this.housingService.getAllHousingLocation();
}
}
