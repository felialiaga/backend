class TicketManager {

    #fee = 0.15;

    constructor() {
        this.events = [];
    }

    getEvents = () => {
        return this.events;
    }

    addEvent = ({title, place, date= new Date(), price, capacity=50}) => {
        const newEvent = {
            title,
            place,
            price: price + price*this.#fee,
            capacity,
            participants: [],
            date: date.toLocaleDateString('es')
        }

        if(this.events.length > 0) {
            newEvent.id = this.events[this.events.length-1].id + 1;
        }else {
            newEvent.id = 1;
        }
    }

    addUser = (eventId, userId) => {
        const event = this.events.find(event => event.id === eventId);

        if(!event) {
            console.log('No se puede agregar por que no existe el evento');
            return;
        }

        if(!event.participants.includes(userId)){
            event.participants.push(userId);
        }else {
            console.log('El usuario ya esta registrado');
            return;
        }
    }

}

addEvent({
    title: 'Evento Feliz',
    place: 'Ubicacion',
    price: 20,
    capacity: 20,
    date: new Date('10-30-2024')
})