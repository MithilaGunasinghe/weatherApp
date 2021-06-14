import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private httpClient: HttpClient) { }


  getWeather(ids: any[]) {
    const URL = 'http://api.openweathermap.org/data/2.5/group';

    const params = {
      id: ids.join(','),
      units: 'metric',
      appid: 'fc25ae5f7fd631a5c1b342a76bd088a4'
    }

    return this.httpClient.get(URL, { params });
  }

  getCities() {
    const URL = 'assets/json/cities.json';
    return this.httpClient.get(URL);

  }

}