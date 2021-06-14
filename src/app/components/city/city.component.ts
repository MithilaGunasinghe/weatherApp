import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @Input() city: any = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onClickCard() {

    this.router.navigate([this.city.id])
  }
}
