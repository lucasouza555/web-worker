// self.addEventListener('message', event => {
//     let i = 0;

//     const ref = self.setInterval(() => { 
//         fetch('http://localhost:3000/alvaro/photos').then(() => {
//             console.log('Teste, '+new Date());
//             // i++;

//             // if(i == 4) {
//             //     self.clearInterval(ref);
//             // }
//         })
//     }, 5000);
// })

self.addEventListener('message', event => {
    const p1 = async () => {
        var value = await self.cookieStore.get('teste');
        return value;
    }
    
    const p2 = async (value) => {
        if(!value) {
            await self.cookieStore.set('teste', '123');

            let i = 0;

            const ref = setInterval(() => { 
                fetch('http://localhost:3000/alvaro/photos').then(() => {
                    console.log('Teste, '+new Date());
                    i++;

                    if(i == 4) {
                        clearInterval(ref);
                        self.cookieStore.delete('teste').then(() => {
                            event.source.postMessage("Acabou");
                        });
                    }
                })
            }, 3000);
        }
    }
    
    const pt = async () => {
        const value = await p1();
        await p2(value);
    }

    event.waitUntil(pt()); 
})

// self.addEventListener('message', event => {
       
//     const request = self.indexedDB.open('teste');

//     request.onsuccess = result => {
//         let store = null;
//         try {
//             store = result.target.result.transaction(['a']).objectStore('a'); 
//         } catch(e) {
//             store = result.target.result.createObjectStore('a');
//         }

//         store.add(1).onsuccess = () => {
//             let i = 0;

//             const ref = self.setInterval(() => { 
//                 fetch('http://localhost:3000/alvaro/photos').then(() => {
//                     console.log('Teste, '+new Date());
//                     i++;
    
//                     if(i == 4) {
//                         self.clearInterval(ref);
//                         self.cookieStore.delete('teste').then(() => {
//                             event.source.postMessage("Acabou");
//                         });
//                     }
//                 })
//             }, 3000);
//         } 
//     } 
// })
