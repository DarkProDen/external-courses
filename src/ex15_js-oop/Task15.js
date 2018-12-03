var Device = function (name, power) {
    this.name = name;
    this.type = 'Device';
    this.power = power;
    this.enabled = false;
}
Device.prototype.switchOnOff = function () {
    if (this.enabled) {
        this.enabled = false;
        console.log(this.name+' disabled');
    }
    else {
        this.enabled = true;
        console.log(this.name+' enabled');
    }
}
Device.prototype.print = function () {
    for (var propertyName in this) {
        if (typeof this[propertyName]!=='function') {
            console.log(propertyName + ': ' + this[propertyName]);
        }  
    }
}
Device.prototype.getPower = function () {
    if (this.enabled) {
        return this.power;
    }
    else {
        return 0;
    }
}

var Lamp = function (name, power) {
    this.name = name;
    this.type = 'Lamp';
    this.power = power;
    this.enabled = false;
    this.luminousFlux = 800;
}
Lamp.prototype = new Device();

var Chandelier = function (name, power) {
    this.name = name;
    this.type = 'Chandelier';
    this.power = power;
    this.enabled = false;
    this.luminousFlux = 2000;
    this.lamps = [new Lamp(name+'__lamp1', power / 3), new Lamp(name+'__lamp2', power / 3), new Lamp(name+'__lamp3', power / 3)];
}
Chandelier.prototype = new Device();
Chandelier.prototype.switchOnOff = function () {
    for (let i = 0; i < Object(this.lamps).length; i++) {
        const lamp = Object(this.lamps)[i];
        lamp.switchOnOff();
    }
    if (this.enabled) {
        this.enabled = false;
        console.log(this.name+' disabled');
    }
    else {
        this.enabled = true;
        console.log(this.name+' enabled');
    }
}

var Refrigerator = function (name, power) {
    this.name = name;
    this.type = 'Refrigerator';
    this.power = power;
    this.enabled = false;
    this.lamp = new Lamp(name+'__lamp', 10);
    this.opened = false;
}
Refrigerator.prototype = new Device();
Refrigerator.prototype.openClose = function () {
    if (this.opened) {
        this.opened = false;
        console.log(this.name+' door closed');
    }
    else {
        this.opened = true;
        console.log(this.name+' door opened');
    }
    this.lamp.switchOnOff();
}
Refrigerator.prototype.getPower = function () {
    if (this.enabled) {
        return this.power + this.lamp.getPower();
    }
    else {
        return 0;
    }
}

var Screen = function (name, power) {
    this.name = name;
    this.type = 'Screen';
    this.power = power;
    this.enabled = false;
    this.resolutionX = 1920;
    this.resolutionY = 1080;
}
Screen.prototype = new Device();

var Room = function (name, devices) {
    this.name = name;
    this.devices = devices;
    /*
    devices.forEach(device => {
        this.devices.push(device);
    });
    */
}
Room.prototype.getPower = function () {
    var result = 0;
    for (let i = 0; i < Object(this.devices).length; i++) {
        const device = Object(this.devices)[i];
        result += device.getPower();
    }
    return result;
}
Room.prototype.getDevice = function (deviceName) {
    for (let i = 0; i < Object(this.devices).length; i++) {
        const device = Object(this.devices)[i];
        if (device.name === deviceName) {
            return device;
        }
    }
}

var tv = new Screen('TV', 300);
tv.print();
console.log(tv.getPower());
tv.switchOnOff();
console.log(tv.getPower());
tv.switchOnOff();
console.log(tv.getPower());
console.log('=========================================================================');
var room = new Room('Kitchen',
    [new Lamp('Lamp1', 10),
    new Chandelier('Chandelier1', 30),
    new Refrigerator('HAIER C2F637CGG', 300),
    new Device('Microwave', 2000),
    new Screen('TV', 300)]);
var i=0;
room.devices.forEach(device => {
    if (i%2===0) {
        device.switchOnOff();
    }
    //device.print();
    i++;
});
console.log('Room consuming '+room.getPower()+' W');
room.devices.forEach(device => {
    if (i%2===0) {
        device.switchOnOff();
    }
    //device.print();
    i++;
});
console.log('Room consuming '+room.getPower()+' W');
room.getDevice('HAIER C2F637CGG').openClose();
console.log('Room consuming '+room.getPower()+' W');
room.getDevice('HAIER C2F637CGG').openClose();
console.log('Room consuming '+room.getPower()+' W');
room.devices.forEach(device => {
    if (i%2===0) {
        device.switchOnOff();
    }
    //device.print();
    i++;
});
console.log('Room consuming '+room.getPower()+' W');
room.devices.forEach(device => {
    if (i%2===0) {
        device.switchOnOff();
    }
    //device.print();
    i++;
});
console.log('Room consuming '+room.getPower()+' W');

