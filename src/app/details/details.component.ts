import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {HousingService} from "../services/housing.service";
import {IHousingLocation} from "../interface/housing-location";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly housingService = inject(HousingService);
  // housingLocationId = 0;
  housingLocation: IHousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  ngOnInit(){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    // this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  submitApplication() {
    this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? '',
    )
  }
}
