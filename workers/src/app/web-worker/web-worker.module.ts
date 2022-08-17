import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebWorkerComponent } from './web-worker.component';

@NgModule({
    declarations: [
        WebWorkerComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class WebWorkerModule {

}