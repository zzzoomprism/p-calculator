import { Component, OnInit } from '@angular/core';
import { RoutesNames } from '../../core/constants/routes-names';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public routesNames = RoutesNames;
  constructor() { }

  ngOnInit(): void {
  }

}
