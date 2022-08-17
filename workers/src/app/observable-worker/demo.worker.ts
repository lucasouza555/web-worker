import { DoWorkUnit, runWorker } from 'observable-webworker';
import { interval, Observable } from 'rxjs';
import { repeatWhen } from 'rxjs/operators';

function testeFn() {
  // var oReq = new XMLHttpRequest();
  // oReq.open("GET", 'http://localhost:8080/topicos', true);
  // oReq.onload = function(e) {
  //   console.log('funcionou');
  // }
  
  // oReq.send();
  return 1;
  // return oReq.response;
}

export class WorkerPoolHashWorker implements DoWorkUnit<any, void> {

  public async workUnit(teste:[]): Promise<any> {
    return testeFn(); 
    // new Observable(subscriber => {
      
    //   subscriber.next({});
    //   subscriber.complete();
    // }).pipe(
    //   repeatWhen(() => interval(5000)))
  }
}  

runWorker(WorkerPoolHashWorker);

