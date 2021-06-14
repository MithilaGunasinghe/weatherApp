import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { mergeMap } from "rxjs/operators";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cities: any[] = [];

  // dependancy injection
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    const colors = ['bg-c-blue', 'bg-c-green', 'bg-c-red', 'bg-c-orange', 'bg-c-purple']
    this.weatherService.getCities().subscribe((result: any) => {

      const ids = result.List.map((city: any) => city.CityCode);

      this.weatherService.getWeather(ids).subscribe((result: any) => {

        this.cities = result.list.map((city: any) => {

          const i = Math.floor(Math.random() * 5)
          return { ...city, color: colors[i] }

        });
      })
    })

    // this.weatherService.getWeather()
  }

}
