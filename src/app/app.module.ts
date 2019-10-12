import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConwaysComponent } from './conways/conways.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SkillComponent } from './skill/skill.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { LinkComponent } from './link/link.component';



@NgModule({
  declarations: [
    AppComponent,
    ConwaysComponent,
    ProjectComponent,
    ProjectListComponent,
    HomeComponent,
    ContactComponent,
    ContactListComponent,
    SkillComponent,
    SkillListComponent,
    LinkComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
