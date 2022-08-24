import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from './models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 // current: CurrentWeather = new CurrentWeather('Jodhpur','29','#','sunny','35','23')
  constructor(private http : HttpClient) { }

  getWeatherData(cityName:string):Observable<WeatherData>{
    
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidApiKeyName,
          environment.XRapidApiKeyValue)
        .set(environment.XWeatherApiDay,environment.XWeatherApiNumber),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('days',4)
        .set('mode', 'json')
        
    });
  }
  // weatherNow(){
  //   return this.current;
  // }


}
