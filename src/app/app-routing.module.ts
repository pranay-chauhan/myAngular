import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';


const routes: Routes = [
  // {
  //   path:'',redirectTo:'student',pathMatch:'full'
  // },
  

  {
    path:'student',
    children:[
      {path:'',component:StudentComponent},{
        path:'studentDetails', component:StudentDetailsComponent
      },{
        path:'studentRegistartion',component:StudentRegistrationComponent
      }
      
    ],

  }
  ,{
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
