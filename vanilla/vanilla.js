// Vanilla JS playground

// Logging levels
console.error('No error so far');
console.warn('This is a warning');
console.info('For your interest'); // same level as console.log
console.debug('Verbose debug stuff');

// Take a look at window object
// console.log(window);

// Your browser
// console.log(window.navigator);

// Start coding here
const myIntegers = [1, 2, 3];

Employee.prototype = new Person(this.id, this.prename, this.surname);
Employee.prototype.switch = function (newDepartment) {
  console.debug(this.fullName() + ' switches to ' + newDepartment);

  this.department = newDepartment;
};

function run() {
  // classic
  // forEach(myIntegers, showAlert);

  // pass a function as parameter
  /*forEach(myIntegers, function (item) {
    alert(item);
  });*/

  // pass a function as lambda
  // forEach(myIntegers, (item) => alert(item));

  var rudi = new Person(47, 'Rudolf', 'Rentier');
  // var rudi = new PersonClass(47, 'Rudolf', 'Rentier');
  /*console.log(rudi.vorname);
  console.log(rudi.nachname);
  console.log(rudi.vollerName());*/

  /*forEach(myIntegers, function (item) {
    console.debug(this); // Aufrufer (= forEach kann this festlegen)
  });

  var that = this;
  forEach(myIntegers, function (item) {
    console.debug(that);
  });

  forEach(myIntegers, (item) => {
    console.debug(this);
  });*/

  // forEach('test', 'test');

  /*try {
    console.debug('trying...');
    forEach('test', 'test');
  } catch (e) {
    console.warn(e);
  } finally {
    console.debug('...finally done :-)');
  }*/

  var emp = new Employee(1, 'Max', 'Muster', 'Management');
  console.debug('Employee', emp);
  emp.switch('Dev');
  console.debug('After switch', emp);
}

run();

function forEach(ary, action) {
  for (var i = 0; i < ary.length; i++) {
    action(ary[i]);
  }
}

function showAlert(item) {
  alert(item);
}

function Person(id, prename, surename) {
  this.prename = prename;
  this.surename = surename;

  this.fullName = function () {
    return id + ': ' + this.prename + ' ' + this.surename;
  };
}

class PersonClass {
  id;
  prename;
  surename;

  constructor(id, prename, surename) {
    this.id = id;
    this.prename = prename;
    this.surename = surename;
  }

  fullName() {
    return this.id + ': ' + this.prename + ' ' + this.surename;
  }
}

function Employee(id, prename, surename, department) {
  Person.call(this, id, prename, surename);
  this.department = department;
}
