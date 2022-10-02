import { FakeauthService } from './../components/demo/demo6/fakeauth.service';
import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { ExercicesComponent } from './exercices.component';


@NgModule({
  declarations: [
    ExercicesComponent
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    AppModule
  ]
})
export class ExercicesModule { }
