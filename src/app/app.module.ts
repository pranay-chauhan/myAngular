import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenetDirectiveComponent } from './Directive/componenet-directive/componenet-directive.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import {FormsModule} from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipePipe } from './pipes/custompipe.pipe'


@NgModule({
  declarations: [
    AppComponent,
    ComponenetDirectiveComponent,
    TwoWayDataBindingComponent,
    PipesComponent,
    CustompipePipe,

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
