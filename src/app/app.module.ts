import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { StudentComponent } from './components/student/student.component';
import { StudentService } from './services/student.service';
import { StudentsComponent } from './components/students/students.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'students', component: StudentsComponent },
  { path: '',   redirectTo: '/students', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
