import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { fromWorkerPool } from 'observable-webworker';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: './observable-worker.component.html'
})
export class ObservableWorkerComponent {

    number;
    output;
    // private worker: Worker;
    // private intervalId:number;
    ping$ = new Subject<boolean>();
    constructor(private _http:HttpClient) {
  
    }
  
    ngOnInit() {
      // const ping = this._http.get('http://localhost:8080/topicos');
      
      if(typeof Worker !== 'undefined') {
        fromWorkerPool<any, void>(
          () => new Worker(`./demo.worker.ts`, { type: 'module' }),
          []
        ).pipe(takeUntil(this.ping$)).subscribe();
      } 
    }
  
    calcFib(event) {
      // const input$: Observable<number> = interval(5000);
  
      // fromWorker<number, number>(() => new Worker('./demo.worker', { type: 'module'}), input$)
      //   .subscribe(message => {
      // });
      
      // if(!this.intervalId) {
      //   this.intervalId = workerTimers.setInterval(() => {
          
      //   }, 5000);
      // }
      // this.worker.postMessage('');
      this.output = this.fibonacci(this.number);
    }
  
    ngOnDestroy() {
      // if(this.intervalId) {
      //     workerTimers.clearInterval(this.intervalId);
      // }
  
    //   this.worker.terminate();
    }
  
  fibonacci(num) {
    if (num == 1 || num == 2) {
        return 1
    }
    return this.fibonacci(num - 1) + this.fibonacci(num - 2)
  }
}