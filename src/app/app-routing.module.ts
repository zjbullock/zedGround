import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConwaysComponent } from './conways/conways.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'conway',
    component: ConwaysComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent,
  },
  {
    path: 'contact',
    component: ContactListComponent,
  },
  {
    path: 'skills',
    component: SkillListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
