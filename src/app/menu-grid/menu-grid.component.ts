import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-grid',
  templateUrl: './menu-grid.component.html',
  styleUrls: ['./menu-grid.component.scss']
})
export class MenuGridComponent implements OnInit {
  constructor() {}

  gridList = [
    { meunName: '더블에스프레소', path: 'assets/paikdabang/더블에스프레소-1.jpg' , itemCode: 'H'},
    { meunName: '앗메리카노', path: 'assets/paikdabang/앗메리카노-1.jpg' , itemCode: 'H'},
    { meunName: '라떼비엔나', path: 'assets/paikdabang/라떼비엔나-1.jpg' , itemCode: 'H'},
    { meunName: '바닐라라떼', path: 'assets/paikdabang/바닐라라떼-1.jpg' , itemCode: 'H'},
    { meunName: '백스라떼', path: 'assets/paikdabang/백스라떼-1.jpg' , itemCode: 'H'},
    { meunName: '비엔나커피', path: 'assets/paikdabang/비엔나커피-1.jpg' , itemCode: 'H'},
    { meunName: '연유라떼', path: 'assets/paikdabang/연유라떼-1.jpg' , itemCode: 'H'},
    { meunName: '원조커피', path: 'assets/paikdabang/원조커피-1.jpg' , itemCode: 'H'},
    { meunName: '카라멜마끼아또', path: 'assets/paikdabang/카라멜마끼아또-1.jpg' , itemCode: 'H'},
    { meunName: '카페모카', path: 'assets/paikdabang/카페모카-1.jpg' , itemCode: 'H'},
    { meunName: '코코넛라떼', path: 'assets/paikdabang/코코넛라떼-1.jpg' , itemCode: 'H'},
    { meunName: '코코넛커피스무디', path: 'assets/paikdabang/코코넛커피스무디-1.jpg' , itemCode: 'H'},
    { meunName: '크리미모카라떼', path: 'assets/paikdabang/크리미모카라떼-2.jpg' , itemCode: 'H'},
    { meunName: '크림그린티라떼', path: 'assets/paikdabang/크림그린티라떼-1.jpg' , itemCode: 'H'}
  ];

  ngOnInit() {}

  menuClick($event) {

    // let {target }= $event
    console.log('상품 클릭 확인', $event.target.dataset.itemcode);
    // console.log('상품 클릭 확인', $event);

  }
}
