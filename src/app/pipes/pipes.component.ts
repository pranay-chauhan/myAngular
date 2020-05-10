import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  emps:any = [
  {code:'emp001',name:"Mohan",dob:'23/3/1980',sal:8000,gender:'male'},
  {code:'emp002',name:"Rohan",dob:'22/12/1979',sal:4500,gender:'male'},
  {code:'emp003',name:"Shivani",dob:'11/1/1990',sal:3200,gender:'female'},
  {code:'emp004',name:"Rahul",dob:'23/2/1975',sal:9000,gender:'male'},
  {code:'emp005',name:"Ankita",dob:'18/1/1981',sal:1900,gender:'female'},
  {code:'emp006',name:"Pratik",dob:'2/7/1989',sal:1200,gender:'male'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
