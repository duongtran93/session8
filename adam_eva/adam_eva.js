let Apple = function () {
    this.weight = 10;

    this.decrease = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    };

    this.isEmpty = function () {
        return false;
    };

    this.getWeight = function () {
        return this.weight;
    }
};

let Human = function () {
    this.name = "";
    this.gender = true;
    this.weight = 0;

    this.isMale = function () {
        return this.gender;
    };

    this.setGender = function (gender) {
        this.gender = gender;
    };

    this.checkApple = function (apple) {
        return apple.weight > 0;
    };

    this.eat = function (apple) {
        if (this.checkApple(apple)) {
            this.weight++;
            apple.decrease();
        }
    };

    this.say = function (say) {
        console.log(say);
    };

    this.getName = function () {
        return this.name;
    };

    this.setName = function (name) {
        this.name = name;
    };

    this.setWeight = function (weight) {
        this.weight = weight;
    };

    this.getWeight = function () {
        return this.weight;
    };
};

let apple = new Apple();
console.log(apple.getWeight());

let adam = new Human();
let eva = new Human();

adam.setName("Adam");
console.log(adam.getName());
adam.setWeight(60);
adam.getWeight();
adam.say("Mày muốn ăn táo không?");
adam.eat(apple);
console.log(adam.getWeight());
console.log(apple.getWeight());

eva.setName("Eva");
console.log(eva.getName());
eva.setWeight(45);
eva.getWeight();
eva.say("Có");
eva.eat(apple);
console.log(eva.getWeight());
console.log(apple.getWeight());

console.log(adam.getName());
adam.say("Ăn nữa không?");
adam.eat(apple);
console.log(adam.getWeight());
console.log(apple.getWeight());
console.log(eva.getName());
eva.say("Có");
eva.eat(apple);
console.log(eva.getWeight());
console.log(apple.getWeight());

console.log(adam.getName());
adam.say("Ăn nữa không?");
adam.eat(apple);
console.log(adam.getWeight());
console.log(apple.getWeight());
console.log(eva.getName());
eva.say("Có");
eva.eat(apple);
console.log(eva.getWeight());
console.log(apple.getWeight());

console.log(adam.getName());
adam.say("Ăn nữa không?");
adam.eat(apple);
console.log(adam.getWeight());
console.log(apple.getWeight());
console.log(eva.getName());
eva.say("Có");
eva.eat(apple);
console.log(eva.getWeight());
console.log(apple.getWeight());

console.log(adam.getName());
adam.say("Ăn nữa không?");
adam.eat(apple);
console.log(adam.getWeight());
console.log(apple.getWeight());
console.log(eva.getName());
eva.say("Có");
eva.eat(apple);
console.log(eva.getWeight());
console.log(apple.getWeight());

console.log(adam.getName());
adam.say("Còn nữa không?");
adam.eat(apple);
console.log(adam.getWeight());
console.log(apple.getWeight());

console.log(adam.getName());
adam.say("Sao mày ăn hết của tao???");