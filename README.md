# angular-demo

Simple project to learn how to use Angular.
It has a backend in https://github.com/Diego-EC/angular-demo-backend

## In this demo I've used
1. [Responsive](#responsive)
2. [Reactive Forms](#reactive-forms)
3. [Routing](#routing)
4. [Communication Between Components](#communication-between-components)
5. [httpclient](#httpclient)
   - [CORS](#cors)


## Responsive
### flex-layout
Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery. [API-Documentation](https://github.com/angular/flex-layout/wiki/API-Documentation)

``` ts
<div fxLayout="column" fxLayoutAlign="center center"  fxLayoutGap="3rem">
```
``` ts
<div fxLayout="row" fxLayout.xs="column" fxLayoutAlign="center center">
```

- **ng-container**
es como el Fragment de React
``` html
<ng-container>
 <div>Foo</div>
 <div>Bar</div>
</ng-container>
```


&nbsp;
## Reactive Forms
- Start by installing the Angular Layout library from npm
``` console
$ npm i -s @angular/flex-layout @angular/cdk
``` 

- Imports
``` ts
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

[formGroup]="myForm"
formControlName="email"
```

- FormBuilder: in the TypeScript
![form-builder](/readme-img/form-builder.png)

- FormGroup: in the HTML
![form-group](/readme-img/form-group.png)


&nbsp;
## Routing
- It is similar to React

- app.module.ts
``` ts
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'students', component: StudentsComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
```

- app-routing.module.ts
``` ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

- routerLink
``` html
<button routerLink="/students">Login</button>
```

&nbsp;
## Communication Between Components
- @Input: From parent to child

  - In the children
  ``` ts
  import { Input } from '@angular/core';

  export class StudentComponent implements OnInit {
    @Input() student: Student;
    @Input() index: number;
  }
  ```

  - In the parent
  ``` html
  <app-student *ngFor="let student of students; let i = index" [student]="student" [index]="i"></app-student>
  ```

- @Output: From child to parent

&nbsp;
## httpclient

``` js
import { HttpClientModule } from '@angular/common/http';
```
``` js
  getAllStudents(){
    const path = "https://jsonplaceholder.typicode.com/users";
    return this.httpClient.get<Student[]>(path);
  }
```
``` js
this.studentService.getAllStudents().subscribe(students => console.log(students));
```
### CORS
- proxy.conf.json
- @CrossOrigin
