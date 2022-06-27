import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  // {
  //   path: 'resume',
  //   component: ResumeComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
