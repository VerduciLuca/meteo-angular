// src/app/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  getWeather(latitude: number, longitude: number): Observable<any> {
    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,cloudcover,windspeed_10m`;
    return this.http.get(url);
  }
}
