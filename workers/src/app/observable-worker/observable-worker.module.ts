import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ObservableWorkerComponent } from './observable-worker.component';

@NgModule({
    declarations: [
        ObservableWorkerComponent
    ],
    imports: [
       CommonModule,
       FormsModule
    ]
})
export class ObservableWorkerModule {

}