import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { WeatherModule } from './pages/weather/weather.module';
import { SearchModule } from './components/search/search.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule, 
    WeatherModule,
    SearchModule,
    HttpClientModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
