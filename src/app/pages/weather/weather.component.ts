import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '@app/shared/interface/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent  {
  @Input() public weather!: WeatherData;
  public BASE_URL = 'https://openweathermap.org/img/wn';
}
