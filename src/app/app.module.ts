import { FakeauthService } from './components/demo/demo6/fakeauth.service';
import { TieInterceptor } from './shared/tie.interceptor';
import { ExercicesModule } from './exercices/exercices.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './shared/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { FormsModule } from '@angular/forms';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { EurtobtcPipe } from './shared/pipes/eurtobtc.pipe';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { HighlightDirective } from './shared/highlight.directive';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { EnfantComponent } from './components/demo/demo5/enfant/enfant.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { ErreurComponent } from './shared/erreur/erreur.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    EurtobtcPipe,
    Demo4Component,
    HighlightDirective,
    Demo5Component,
    EnfantComponent,
    Demo6Component,
    ErreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports : [
    EurtobtcPipe
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : TieInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
