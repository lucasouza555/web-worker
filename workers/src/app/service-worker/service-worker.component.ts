import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './service-worker.component.html'
})
export class ServiceWorkerComponent implements OnInit{
    number;
    output;
    
    ngOnInit() {
      if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('assets/timer.js', { type: 'module'}).then(function(registration) {
            console.log('Service worker registration succeeded:', registration); 
            registration.active.postMessage('Start');
          }, function(error) {
            console.log('Service worker registration failed:', error);
          });

          navigator.serviceWorker.onmessage = (message:MessageEvent) => {
              alert(message.data);
          }
      } else {
        console.log('Service workers are not supported.');
      }
    }

    calcFib(event) {
      this.output = this.fibonacci(this.number);
    }

    apagarServiceWorker() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
          for(let registration of registrations) {
          registration.unregister()
        } })
      }
    }

    fibonacci(num) {
      if (num == 1 || num == 2) {
          return 1
      }
      return this.fibonacci(num - 1) + this.fibonacci(num - 2)
    }
}