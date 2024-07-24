import { Injectable } from '@angular/core';
import {IHousingLocation} from "../interface/housing-location";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';


  async getAllHousingLocation(): Promise<IHousingLocation[]> {
    // return this.housingLocationList;
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<IHousingLocation | undefined> {
    // return this.housingLocationList.find(housingLocation =>
    //     housingLocation.id === id);
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email)
  }
}
