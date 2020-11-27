import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-pillar',
  templateUrl: './second-pillar.component.html',
  styleUrls: ['./second-pillar.component.scss']
})
export class SecondPillarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public openPopup(): void {
    console.log('test');
  }
}
