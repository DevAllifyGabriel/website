import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-couser',
  templateUrl: './couser.component.html',
  styleUrls: ['./couser.component.css']
})
export class CouserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course=[
    {'id': 1, 'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem','image':'../../assets/angular.jpg'},
    {'id': 2, 'name':'Learn typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem','image':'../../assets/typescript.jpg'},
    {'id': 3, 'name':'Learn NodeJs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem','image':'../../assets/nodejs.jpg'},
    {'id': 4, 'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem','image':'../../assets/reactjs.jpg'}

  ]

}
