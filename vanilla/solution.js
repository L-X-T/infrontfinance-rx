class Passenger {
  id;
  firstname;
  lastname;

  constructor(id, firstname, lastname) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class PassengerManager {
  passengers;

  constructor() {
    this.passengers = [];
  }

  add(passenger) {
    this.passengers.push(passenger);
  }

  getById(id) {
    return this.passengers.find((passenger) => passenger.id === id);
  }

  getByName(lastname) {
    return this.passengers.find((passenger) => passenger.lastname === lastname);
  }

  count() {
    return this.passengers.length;
  }
}

const pass1 = new Passenger(1, 'Max', 'Finance');
const pass2 = new Passenger(2, 'Sara', 'Finance');
console.log('Passengers');
console.log(pass1);
console.log(pass2);

const manager = new PassengerManager();
console.log('PM empty: ' + manager);

manager.add(pass1);
manager.add(pass2);
console.log('PM with passengers:');
console.log(manager);
console.log('PM getById():');
console.log(manager.getById(2));
console.log('PM getByName():');
console.log(manager.getByName('Finance'));
console.log('PM count(): ' + manager.count());
