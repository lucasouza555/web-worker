import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ObservableWorkerComponent } from './observable-worker/observable-worker.component';
import { ObservableWorkerModule } from './observable-worker/observable-worker.module';
import { WebWorkerComponent } from './web-worker/web-worker.component';
import { ServiceWorkerComponent } from './service-worker/service-worker.component';
import { ServiceWorkerModule } from './service-worker/service-worker.module';
import { WebWorkerModule } from './web-worker/web-worker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleModule } from './simple/simple.module';
import { SimpleComponent } from './simple/simple.component';

let routes:Routes = [
  {
    path: '',
    component: SimpleComponent
  },
  {
    path: 'service-worker',
    component: ServiceWorkerComponent
  },
  {
    path: 'web-worker',
    component: WebWorkerComponent
  },
  {
    path: 'observable-worker',
    component: ObservableWorkerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ObservableWorkerModule,
    ServiceWorkerModule,
    WebWorkerModule,
    SimpleModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
