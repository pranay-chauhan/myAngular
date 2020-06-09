import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {NewServiceService} from './new-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NewServiceService]
})
export class AppComponent {
  
  name:string ='Mohan Kumar'
  headline:boolean = false;
  data:any='My Study';
  text:string
  dob:any = new Date(1992,7,12);
  salary:number = 45000
  people: any[] = [
    {
      "name": "douglas  pace", 'gender':'male',"age":30,"desc":'TL','dob':'03/aug/1992'
    },
    {
      "name": "mcleod  mueller", 'gender':'female',"age":23,"desc":'SE','dob':'22/sept/1996'
    },
    {
      "name": "may meyers", 'gender':'male',"age":56,"desc":'Consultant','dob':'12/oct/1956'
    },
    {
      "name": "aguirre  ellis",'gender':'female', "age":25,"desc":'Tester','dob':'20/feb/1997'
    },
    {
      "name": "cook  tyson", 'gender':'male',"age":34,"desc":'Business Analyst','dob':'19/mar/1987'
    }
  ];
  showConsole(){
    console.log("Hello User");
    this.headline = true;
  }
  getColor(desc){
    switch(desc){
      case "TL":return 'green';
      case 'Consultant': return 'red';
      case 'SE':return 'Yellow';
      case 'Tester':return 'Orange';
      case 'Business Analyst':return 'Pink'
      
    }
  }

  getClassCss(flag:string){
    let cssClass;
    if(flag ='mode'){
      cssClass = {
        'one':true,
        'four':false
      }
    }
    else{
     cssClass={
       'four':true,
       'one':false
     }

    }
    return cssClass
  }
  constructor(private _newService:NewServiceService){
    
  }
  ngOnInit(){
    this.text = this._newService.display()
  }
  title = 'my-dream-app';
}
