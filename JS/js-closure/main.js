function toggle(posibilidades) {
    let counter = 0;
    function print() {
        const value = posibilidades[counter];
        if (counter === posibilidades.length -1) {
            counter = 0;
        } else {
            counter++;
        }
        return value;
    }
    return print;
}

const hello = toggle(['hello']);
const onOff = toggle(['on', 'off']);
const speed = toggle(['slow', 'medium', 'fast']);

console.log(hello()); // "hello"
console.log(hello()); // "hello"
console.log(hello()); // "hello"
console.log(hello()); // "hello"
console.log(hello()); // "hello"
console.log(hello()); // "hello"

console.log('--------');
console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"
console.log(onOff()); // "off"

console.log('--------');
console.log(speed()); // "slow"
console.log(speed()); // "medium"
console.log(speed()); // "fast"
console.log(speed()); // "slow"
console.log(speed()); // "slow"
console.log(speed()); // "medium"
console.log(speed()); // "fast"
console.log(speed()); // "slow"
console.log(speed()); // "slow"
console.log(speed()); // "medium"
console.log(speed()); // "fast"
console.log(speed()); // "slow"
console.log(speed()); // "slow"
console.log(speed()); // "slow"