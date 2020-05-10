import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenet-directive',
  templateUrl: './componenet-directive.component.html',
  styleUrls: ['./componenet-directive.component.css']
})
export class ComponenetDirectiveComponent implements OnInit {
  emps:any=[
    {name:'Mohan',age:20,sal:3000},
    {name:'Sohan',age:28,sal:1800},
    {name:'Roahan',age:34,sal:4000}
  ];
  myngIf:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  myButton(){
    this.myngIf = true;
  }
  }
  
