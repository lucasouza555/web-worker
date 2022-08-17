import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerComponent } from './service-worker.component';

@NgModule({
    declarations: [
        ServiceWorkerComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ServiceWorkerModule {

}