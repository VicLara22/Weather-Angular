import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '@shared/interface/weather.interface';
import { WeatherService } from './pages/weather/services/weather.services';
import { GeoLocationService } from './shared/services/geo-location-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public weather$!: Observable<WeatherData>;

  constructor(
    private readonly weatherSvc: WeatherService,
    private readonly getLocationSvc: GeoLocationService
  ) {
    if (navigator?.geolocation) {
      this.getLocation();
    }
  }

  title = 'weatherApp';

  public onSearch(city: string): void {
    this.weather$ = this.weatherSvc.getWeatherByname(city);
  }

  private async getLocation(): Promise<void> {
    try {
      const coords = await this.getLocationSvc.getCurrentPosition();
      this.weather$ = this.weatherSvc.getWeatherByCoords(coords);
    } catch (error) {
      console.log(error)
    }
  }
}
