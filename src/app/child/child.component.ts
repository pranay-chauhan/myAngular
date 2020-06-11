import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() myInput:string;
@Output() myOutput:EventEmitter<string> = new EventEmitter();
outputString = "I am your child"
  constructor() { }

  ngOnInit(): void {
    console.log(this.myInput)
  }

  sendData(){
    this.myOutput.emit(this.outputString)
  }
}
