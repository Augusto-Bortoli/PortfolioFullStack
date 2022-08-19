import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderRightComponent } from './components/header-right/header-right.component';
import { HeaderLeftComponent } from './components/header-left/header-left.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExpLaboralComponent } from './components/exp-laboral/exp-laboral.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    HeaderComponent,
    BannerComponent,
    HeaderRightComponent,
    HeaderLeftComponent,
    AboutMeComponent,
    ExpLaboralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


