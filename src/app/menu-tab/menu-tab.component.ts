import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { MenuGridComponent } from '../menu-grid/menu-grid.component';
import { DynamicComponentDirective } from '../dynamic-component.directive';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.scss']
})
export class MenuTabComponent implements OnInit {
  @ViewChild(DynamicComponentDirective) dynamicComponentHost: DynamicComponentDirective;

  public tabList = [
    { tabName: '신메뉴', component: MenuGridComponent },
    { tabName: '커피', component: MenuGridComponent },
    { tabName: '음료', component: MenuGridComponent },
    { tabName: '아이스크림/디저트', component: MenuGridComponent },
    { tabName: '빽스치노', component: MenuGridComponent }
  ];

  constructor() {}

  ngOnInit() {



  }
}
