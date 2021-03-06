const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let cw = window.innerWidth;
let ch = window.innerHeight;

let charArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

let maxCharacters = 1000;
let fallingArray = [];
let fontSize = 15;
let maxColumns = cw / fontSize;

canvas.width = cw;
canvas.height = ch;

let frames = 0;

class FallingChar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(context) {
        this.value =
            charArray[
                Math.floor(Math.random() * (charArray.length - 1))
            ].toUpperCase();

        this.speed = (Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;

        context.fillStyle = "rgba(0, 255, 0)";
        context.font = fontSize + "px sans-serif";
        context.fillText(this.value, this.x, this.y);
        this.y += this.speed;
        if (this.y > ch) {
            this.y = (Math.random() * ch) / 2 - 50;
            this.x = Math.floor(Math.random() * maxColumns) * fontSize;
            this.spee =
                (-Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;
        }
    }
}

let update = () => {
    if (fallingArray.length < maxCharacters) {
        let fallingChar = new FallingChar(
            Math.floor(Math.random() * maxColumns) * fontSize,
            (Math.random() * ch) / 2 - 50
        );
        fallingArray.push(fallingChar);
    }
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0, 0, cw, ch);
    for (let i = 0; i < fallingArray.length && frames % 2 == 0; i++) {
        fallingArray[i].draw(context);
    }
    requestAnimationFrame(update);
    frames++;
};

update();
