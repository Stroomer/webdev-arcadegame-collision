class Keyboard {
  constructor() {
    console.log('Keyboard Class instantiated');
    this.keys = [];

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);

    document.addEventListener('keydown', this.keyDownHandler);
    document.addEventListener('keyup', this.keyUpHandler);
  }

  keyDownHandler(event) {
    console.log(event.key);
    this.keys[event.key] = true;
  }

  keyUpHandler(event) {
    console.log(event.key);
    this.keys[event.key] = false;
  }

  isKeyDown(key) {
    return this.keys[key];
  }
}

class Mouse {
  constructor() {
    this.mouseWheelUp = false;
    this.mouseWheelDown = false;
  }

  mouseWheelHandler(event) {
    if (event.deltaY < 0) {
      this.mouseWheelUp = true;
      this.mouseWheelDown = false;
    } else if (event.deltaY > 0) {
      this.mouseWheelDown = true;
      this.mouseWheelUp = false;
    }
  }

  mouseDownHandler(event) {}
}
