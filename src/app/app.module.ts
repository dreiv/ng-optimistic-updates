import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BiggerFasterComponent } from './pages/bigger-faster/bigger-faster.component';
import { MiniComponent } from './pages/mini/mini.component';
import { AppRoutingModule } from './app-routing.module';
import { NeoComponent } from './shared/neo/neo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BiggerFasterComponent,
    MiniComponent,
    NeoComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
