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

  loadByName(lastname) {
    return new Promise((resolve, reject) => {
      const apiUrl = 'http://www.angular.at/api/';
      const xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.info('[xhr] readyState: ' + this.readyState);
          console.info('[xhr] status: ' + this.status);
          resolve(this.responseText);
        } else if (this.status && this.status !== 200) {
          console.warn('[xhr] readyState: ' + this.readyState);
          console.warn('[xhr] status: ' + this.status);
          reject(this);
        } else {
          console.debug('[xhr] readyState: ' + this.readyState);
          console.debug('[xhr] status: ' + this.status);
        }
      };

      xmlHttp.open('GET', apiUrl + 'passagier?name=' + lastname.toString(), true);
      xmlHttp.send();
    });
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

class ExtendedPassengerManager extends PassengerManager {
  add(passenger) {
    const existingPassenger = this.getById(passenger.id);
    if (existingPassenger) {
      throw new Error('Passenger already exists');
    } else {
      this.passengers.push(passenger);
    }
  }

  update(passenger) {
    const passengerToUpdate = this.getById(passenger.id);
    if (passengerToUpdate) {
      passengerToUpdate.firstname = passenger.firstname;
      passengerToUpdate.lastname = passenger.lastname;
    }
  }
}

const extendedManager = new ExtendedPassengerManager();
console.log('EPM empty:');
console.log(extendedManager);

extendedManager.add(pass1);

try {
  extendedManager.add(pass1); // should throw exception
} catch (e) {
  console.warn(e);
}

console.log('EPM with added passenger:');
console.log(extendedManager);
console.log('EPM count(): ' + extendedManager.count());

extendedManager.update({ ...pass2, id: pass1.id });

console.log('EPM with added passenger:');
console.log(extendedManager);
console.log('EPM count(): ' + extendedManager.count());

extendedManager
  .loadByName('Muster')
  .then((passenger) => {
    console.warn('[Resolve] Passenger:');
    console.log(passenger);
  })
  .catch((response) => {
    console.error('[Reject] Response:');
    console.log(response);
  });
