/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {  
  setInterval(() => {
    postMessage('teste');  
  }, 5000) 
});
