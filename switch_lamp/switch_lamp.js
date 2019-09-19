let SwitchButton = function () {
    this.status = false;
    this.lamp = ElectricLamp;

    this.getStatus = function () {
        return this.status;
    };

    this.connectToButton = function (value) {
        this.lamp = value;
        return this.lamp;
    };

    this.switchOff = function () {
        this.status = false;
        this.lamp.turnOff();
    };

    this.switchOn = function () {
        this.status = true;
        this.lamp.turnOn();
    }
};

let ElectricLamp = function () {
    this.status = false;

    this.getStatus = function () {
        return this.status;
    };

    this.turnOff = function () {
        this.status = switchButton.getStatus();
        if (this.status === false) {
            alert("Notlightt")
        }
    };

    this.turnOn = function () {
        this.status = switchButton.getStatus();
        if (this.status === true) {
            alert("Light");
        }
    }
};

let switchButton = new SwitchButton();
let electricLamp = new ElectricLamp();

switchButton.connectToButton(electricLamp);





