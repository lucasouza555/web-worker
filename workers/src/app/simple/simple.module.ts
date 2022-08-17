import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimpleComponent } from './simple.component';

@NgModule({
    declarations: [
        SimpleComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SimpleModule {

}