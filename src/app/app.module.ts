import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic/topic.component';
import { HeadfootModule } from './modules/headfoot/headfoot.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeadfootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
