import { Component, OnInit } from '@angular/core';
import {ISelect} from "../../shared/select/select.component";

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  public birthList: ISelect[] = [
    { value: 1993, title: "1993", shortValue: "93"},
    { value: 1994, title: "1994", shortValue: "94"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
