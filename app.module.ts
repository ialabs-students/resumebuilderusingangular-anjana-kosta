import { ResumeModule } from './resume/resume.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    NavigationComponent,
    NavBarComponent,
    FormSectionComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ResumeModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
