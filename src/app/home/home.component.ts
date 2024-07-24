import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {IHousingLocation} from "../interface/housing-location";
import {HousingService} from "../services/housing.service";
import {filter} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private readonly housingService = inject(HousingService);
  housingLocationList: IHousingLocation[] = [];
  filteredLocationList: IHousingLocation[] = [];

ngOnInit() {
  // this.housingLocationList = this.housingService.getAllHousingLocation();
  this.housingService.getAllHousingLocation().then((housingLocations: IHousingLocation[]) => {
    this.housingLocationList = housingLocations;
    this.filteredLocationList = housingLocations;
  })
}
  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.filteredLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }

}
