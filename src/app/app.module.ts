import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { InstagramTemplateComponent } from './instagram-template/instagram-template.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    ResumeComponent,
    WorkComponent,
    HomeComponent,
    ProjectPreviewComponent,
    InstagramTemplateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
