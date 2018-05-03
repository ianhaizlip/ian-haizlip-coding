import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { InfoComponent } from './info/info.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { PracticeService } from './practice.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainAreaComponent,
    InfoComponent,
    ProfileComponent,
    ProjectsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ProfileComponent},
      {path: 'Projects', component: ProjectsComponent},
      {path: 'Resume', component: ResumeComponent},
    ])
  ],
  providers: [PracticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
