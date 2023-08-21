import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { MyLibComponent } from './my-lib.component';



@NgModule({
  declarations: [
    MyLibComponent,
  ],
  imports: [
    
  ],
  exports: [
    MyLibComponent,
    ButtonModule
  ]
})
export class MyLibModule { }
