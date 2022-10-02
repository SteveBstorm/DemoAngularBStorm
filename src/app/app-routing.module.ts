import { ErreurComponent } from './shared/erreur/erreur.component';
import { AuthGuard } from './shared/auth.guard';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { DemoComponent } from './components/demo/demo.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';

const routes: Routes = [
  {path : '', redirectTo : "home", pathMatch : 'full'},
  {path : "home", component : HomeComponent},
  {path : "about", component : AboutComponent},
  {path : 'demo', component : DemoComponent, children : [
    {path : 'demo1', component : Demo1Component},
    {path : 'demo2', component : Demo2Component},
    {path : 'demo3', component : Demo3Component},
    {path : 'demo4', component : Demo4Component},
    {path : 'demo5', canActivate : [AuthGuard], component : Demo5Component},
    {path : 'demo6', component : Demo6Component},
  ]},
  {path : '404', component : ErreurComponent},
  {path : '**', redirectTo : '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
