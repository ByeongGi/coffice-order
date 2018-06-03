import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selected = 'B';
  constructor() { }

  ngOnInit() {
  }
  selectedChangeValue({value}) {
    console.log(value);
  }
}
