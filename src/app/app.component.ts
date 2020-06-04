import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string ='Mohan Kumar'
  headline:boolean = false;
  people: any[] = [
    {
      "name": "Douglas  Pace", "age":30,"desc":'TL'
    },
    {
      "name": "Mcleod  Mueller", "age":23,"desc":'SE'
    },
    {
      "name": "Day  Meyers", "age":56,"desc":'Consultant'
    },
    {
      "name": "Aguirre  Ellis", "age":25,"desc":'Tester'
    },
    {
      "name": "Cook  Tyson", "age":34,"desc":'Business Analyst'
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
  constructor(){
    console.log('This is Module component')
  }
  title = 'my-dream-app';
}
