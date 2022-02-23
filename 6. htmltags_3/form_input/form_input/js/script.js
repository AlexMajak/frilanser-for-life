class Samurai {
    constructor(name) {
        this.name = name
    }
    hello() {alert(this.name)}
}

let shogun = new Samurai("Dimych")
// shogun.hello()
console.log(shogun)
console.log(shogun.__proto__.__proto__)
console.log(shogun.__proto__.constructor.__proto__)
console.log(shogun.__proto__.__proto__.__proto__)