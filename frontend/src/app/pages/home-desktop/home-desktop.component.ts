import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ISelect } from '../../shared/select/select.component';


@Component({
  selector: 'app-home-desktop',
  templateUrl: './home-desktop.component.html',
  styleUrls: ['./home-desktop.component.scss']
})
export class HomeDesktopComponent implements OnInit {

  public birthList: ISelect[] = [
    { value: 1993, title: "1993", shortValue: "93"},
    { value: 1994, title: "1994", shortValue: "94"},
  ];


  constructor(

  ) { }

  ngOnInit(): void {
  }


}
