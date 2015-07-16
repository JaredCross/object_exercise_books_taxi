function Taxi(driverName, maxNumberOfPassengers) {
  this.driverName = driverName;
  this.maxNumberOfPassengers = maxNumberOfPassengers;
}

Taxi.prototype.addPassenger = function(passengerName) {
    if (!this.passengers) {
      this.passengers = [];
    }

    this.passengers.push(passengerName);
};

Taxi.prototype.passengerCount = function () {
  if (!this.passengers) {
    return 0;
  } else {
    return this.passengers.length;
  }
};

Taxi.prototype.full = function () {
  if (this.passengerCount() === this.maxNumberOfPassengers) {
    return true;
  } else {
    return false;
  }
};

Taxi.prototype.dropOffPassengers = function () {
  this.passengers = [];
};

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Taxi;
