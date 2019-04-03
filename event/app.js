const events = require('events');
const eventEmitter = new events.EventEmitter();

const eventHandler = (num1, num2) => {
    console.log('event occured');
    console.log(num1 + num2);
}

eventEmitter.on('tutorial', eventHandler);

eventEmitter.emit('tutorial', 1, 2);

class Person extends events.EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let mike = new Person('Mike');
mike.on('call', () => {
    console.log('mike called');
})

mike.emit('call');
