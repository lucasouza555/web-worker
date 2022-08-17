import { Component } from '@angular/core';

@Component({
    templateUrl: './web-worker.component.html'
})
export class WebWorkerComponent {
    number;
    output;
    private worker: Worker;
    private intervalId:number;
    
    calcFib(event) {
      this.worker = new Worker('./web.worker', { type: 'module'});
      
      this.worker.postMessage('');

      // this.worker.onmessage = (ev: MessageEvent<any>) => {
      //   console.log(ev.data);
      //   return null;
      // }

      this.output = this.fibonacci(this.number);
    }
  
    ngOnDestroy() {
      this.worker.terminate();
    }
  
  fibonacci(num) {
    if (num == 1 || num == 2) {
        return 1
    }
    return this.fibonacci(num - 1) + this.fibonacci(num - 2)
  }
}