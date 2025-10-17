function setup() {
    let fruitshop = {
        apple: 0.3,
        lemon: 0.5,
        orange: 0.4,
        kiwi: 0.6,
    };

    console.log(fruitshop);
    console.log(fruitshop.apple);

    fruitshop.dragonfruit = 0.5;
    console.log(fruitshop);

    let apple = {
        type: "apple",
        price: 0.5,
        quantity: 70,
    }
    let lemon = {
        type: "lemon",
        price: 0.3,
        quantity: 100,
    }
    console.log(apple);
    let shopkeeper = [apple, lemon];
    let randomFruit = random(shopkeeper);
    console.log(shopkeeper);
    console.log(randomFruit);
}

function draw() {

}