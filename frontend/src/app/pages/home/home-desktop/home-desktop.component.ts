import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ISelect } from '../../../shared/select/select.component';
import { Router } from '@angular/router';
import * as d3 from 'd3';
import { RoutesNames } from '../../../core/constants/routes-names';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home-desktop.component.html',
  styleUrls: ['./home-desktop.component.scss']
})

export class HomeDesktopComponent implements OnInit {


  public routerUrl: string;
  public birthList: ISelect[] = [
    { value: 1993, title: "1993", shortValue: "93"},
    { value: 1994, title: "1994", shortValue: "94"},
  ];


  constructor(
    private router: Router
  ) {
    this.routerUrl = router.url;
  }

  ngOnInit(): void {
  }

  public navigation(){
    this.router.navigate(['ch-en/', RoutesNames.CALCUlATED])
  }

}
