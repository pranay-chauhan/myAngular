import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { EmploginComponent } from './compnay/emplogin/emplogin.component';
import { MypipePipe } from './mypipe.pipe';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


@NgModule({
  declarations: [
    AppComponent,
    EmploginComponent,
    MypipePipe,
    StudentComponent,
    StudentDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('This is module');
    
  }
}
