/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {  
  setInterval(() => {
    console.log('teste')
  }, 5000) 
  postMessage('');
});
