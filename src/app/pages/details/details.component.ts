import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  city: any = null;
  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // (+) converts string 'id' to a number
      this.weatherService.getWeather([id]).subscribe((result: any) => {
        this.city = result.list[0]
      })

    });

  }



}
