function Hero(image, top, left, size, rigth) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.right = rigth;
    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };
    this.getHeroElement1 = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; right: ' + this.right + 'px;position:absolute;" />';
    };
    this.moveRight = function () {
        this.left += 1;
        console.log('ok: ' + this.left);
    };
    this.moveRight1 = function () {
        this.right += 1;
        console.log('ok: ' + this.right);
    };
}

var hero = new Hero('pikachu.png', 20, 30, 100,200);
var yasu = new Hero("yasuo.jpg", 20, 30, 100,200);

function start() {
    if (hero.left < window.innerWidth/2 - hero.size) {
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    requestAnimationFrame(start)

}

function start1() {
    if (yasu.right < window.innerWidth/2 - yasu.size) {
        yasu.moveRight1();
    }
    document.getElementById('game1').innerHTML = yasu.getHeroElement1();
    requestAnimationFrame(start1)
}
start();
start1();
