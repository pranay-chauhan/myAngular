import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenetDirectiveComponent } from './Directive/componenet-directive/componenet-directive.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponenetDirectiveComponent,
    TwoWayDataBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
