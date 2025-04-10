import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MainPageService } from '../services/MainPage/main-page.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [HeaderComponent,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private apiMaain:MainPageService){}

  cityListObj: any[] = [];
  tocityListObj: any[] = [];
  selectFromCity: any = null;
  selectedTocity: any = null;

  dropdownOpen = {
    fromCity: false,
    toCity: false
  };

  ngOnInit(): void {
    this.apiMaain.GetSources().subscribe({
      next: (data) => {
        this.cityListObj = data;
      },
      error: (error) => {
        console.log("Error in GetCourse - Home.Ts", error);
      },
      complete: () => {
        console.log("GetSources API call completed.");
      }
    });
  }

  toggleDropdown(dropdown: 'fromCity' | 'toCity'): void {
    this.dropdownOpen[dropdown] = !this.dropdownOpen[dropdown];
  }

  selectCity(city: any, dropdown: 'fromCity' | 'toCity'): void {
    if (dropdown === 'fromCity') {
      this.selectFromCity = city;
      this.getTocityList();
    } else if (dropdown === 'toCity') {
      this.selectedTocity = city;
    }

    this.dropdownOpen[dropdown] = false;
  }

  getTocityList(): void {
    if (this.selectFromCity?.CM_CityID) {
      this.tocityListObj = this.cityListObj.filter(
        city => city.CM_CityID !== this.selectFromCity.CM_CityID
      );
    } else {
      this.tocityListObj = [...this.cityListObj];
    }

  }

  // swapCities() {
  //   if (this.selectFromCity && this.selectedTocity) {
  //     const temp = this.selectFromCity;
  //     this.selectFromCity = this.selectedTocity;
  //     this.selectedTocity = temp;
  //     this.getTocityList(); // Refresh list
  //   }
  // }
  

  // cityListObj: any [] = [];
  // tocityListObj :any [] = [];
  // selectFromCity: any;
  // selectedTocity: any;


  // ngOnInit(): void {
  //   this.apiMaain.GetSources().subscribe({
  //     next: (data) => {
  //       this.cityListObj = data;
  //     },
  //     error: (error) => {
  //       console.log("Error in GetCourse - Home.Ts", error);
  //     },
  //     complete: () => {
  //       console.log("GetSources API call completed.");
  //     }
  //   });
  // }
  
  // getTocityList() {
  //   // Ensure selectFromCity is defined before filtering
  //   if (this.selectFromCity !== null && this.selectFromCity !== undefined) {
  //     this.tocityListObj = this.cityListObj.filter(
  //       (city) => city.CM_CityID !== this.selectFromCity
  //     );
  //   } else {
  //     this.tocityListObj = [...this.cityListObj]; // fallback to full list
  //   }
  
  //   console.log('Filtered city list:', this.tocityListObj);
  // }
  

}
