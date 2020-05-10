import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenetDirectiveComponent } from './Directive/componenet-directive/componenet-directive.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    ComponenetDirectiveComponent,
    TwoWayDataBindingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
