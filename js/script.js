//Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// Predisporre un campo di input testuale e un pulsante "aggiungi": 
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo
// che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)



const { createApp } = Vue

  createApp({
    data() {
      return {
        todos: [
            {
                text : 'Fare ricarica al telefono',
                done : false ,
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
                done : false ,
            },
            {
                text : "Chiedere l'età a Danilo" ,
                done : false ,
            },
            
        ],
        newTodo: '',
        newItem : {text: '', done: false},
    
      }
    },
    methods: {
        deleteTodo(index) {
          this.todos.splice(index, 1);
    
        },
        addToDo() {
            this.newItem.text = this.newTodo;
            this.todos.push(this.newItem);
            this.newItem = {text: "", done: false};
            this.newTodo = '';
            
        },
        changeDone(index){
            if(this.todos[index].done == true){
                this.todos[index].done = false;
            }else{
                this.todos[index].done = true;
            }
        }
    },
  }).mount('#app')