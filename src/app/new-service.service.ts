import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor() { }
  display(){
    return 'Hello My Service'
  }
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
}
