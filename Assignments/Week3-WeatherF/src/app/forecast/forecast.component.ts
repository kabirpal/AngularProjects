import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  city:string = 'Jodhpur';
  constructor(private weatherService: WeatherService){}
  
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.city);
  }

  OnSubmit(){
    this.getWeatherData(this.city);
  }

  private getWeatherData(city:string){
    this.weatherService.getWeatherData(city)
    .subscribe({
      next:(response)=> {
        console.log(response)
        this.weatherData = response;
      }
    })
  }
}
