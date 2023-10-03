import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';
import { ChangeComponent } from './change/change.component';


const routes: Routes = [
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'reset', component:ResetComponent},
  {path:'change', component:ChangeComponent},
  {path:"",redirectTo:'signin',pathMatch:'full'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
