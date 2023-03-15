const { createApp } = Vue

  createApp({
    data() {
      return {
        todos: [
            {
                text : 'Fare ricarica al telefono',
                done : true ,
            },
            {
                text : 'Portare il cane al parco',
                done : false ,
            },
            {
                text : "Pushare l'esercizio del mattino",
                done : false ,
            },
            {
                text : 'Inviare la consegna del nuovo esercizio',
                done : true ,
            },
            {
                text : "Chiedere l'età a Danilo" ,
                done : true ,
            },
            
          ],
      }
    }
  }).mount('#app')