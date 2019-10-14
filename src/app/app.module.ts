import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConwaysComponent } from './conways/conways.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SkillComponent } from './skill/skill.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { LinkComponent } from './link/link.component';
import { ConwaysControlsComponent } from './conways-controls/conways-controls.component';



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
    ConwaysControlsComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
