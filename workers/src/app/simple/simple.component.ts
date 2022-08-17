import { Component } from '@angular/core';

@Component({
    templateUrl: './simple.component.html'
})
export class SimpleComponent {
    number;
    output;
    
    ngOnInit() {
        const script = document.createElement('script');
        script.src = 'assets/timer_simple.js';
        document.body.appendChild(script);  
    }

    calcFib(event) {
      this.output = this.fibonacci(this.number);
    }

    fibonacci(num) {
      if (num == 1 || num == 2) {
          return 1
      }
      return this.fibonacci(num - 1) + this.fibonacci(num - 2)
    }
}