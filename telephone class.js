javascript
class Observer {
  update(message) {
    console.log(message);
  }
}

class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  addPhoneNumber(number) {
    this.phoneNumbers.push(number);
  }

  removePhoneNumber(number) {
    this.phoneNumbers = this.phoneNumbers.filter(phone => phone !== number);
  }

  dialPhoneNumber(number) {
    if (this.phoneNumbers.includes(number)) {
      this.notifyObservers(number);
    } else {
      console.log('Number not found');
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(number) {
    this.observers.forEach(observer => observer.update(number));
  }
}

// Instantiate the telephone class
const telephone = new Telephone();

// Create a few observers
const observer1 = new Observer();
const observer2 = new Observer();


observer2.update = function(number) {
  console.log(`Now dialing ${number}`);
};

// Add phone numbers to the telephone
telephone.addPhoneNumber('1234567890');
telephone.addPhoneNumber('2347023232');

// Add observers to the telephone
telephone.addObserver(observer1);
telephone.addObserver(observer2);

//  dial a number to see if observers get notified
telephone.dialPhoneNumber('2347023232');