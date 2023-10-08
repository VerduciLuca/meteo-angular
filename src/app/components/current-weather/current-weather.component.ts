import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather(44.4048, 8.9444).subscribe((data) => {
      this.weatherData = data;
      console.log(data);
      
    });
  }
}
