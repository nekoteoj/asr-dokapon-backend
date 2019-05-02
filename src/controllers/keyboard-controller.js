import {
  type, up, down, left, right,
} from '../models/keyboard';

class KeyboardController {
  post(req, res, next) {
    const { command } = req.body;
    let x;
    let y;
    if (command === '1') {
      right();
    } else if (command === '2') {
      up();
    } else if (command === '3') {
      left();
    } else if (command === '4') {
      type('v');
    } else if (command === '5') {
      type('c');
    } else if (command === '6') {
      type('z');
    } else if (command === '7') {
      type('x');
    } else if (command === '8') {
      down();
    } else if (command === '9') {
      type('z');
    } else if (command === '10') {
      type('z');
    } else if (command === '11') {
      type('c');
    } else if (command === '12') {
      type('v');
    } else if (command === '13') {
      type('x');
    } else if (command === '14') {
      type('x');
    } else if (command === '15') {
      type('x');
    } else if (command === '16') {
      type('x');
    } else if (command === '17') {
      type('x');
    } else if (command === '18') {
      type('z');
    } else if (command === '20') {
      x = Math.floor(Math.random() * 5);
      for (let i = 0; i < x; i += 1) {
        y = Math.floor(Math.random() * 2);
        switch (y) {
          case 0:
            left();
            break;
          case 1:
            right();
            break;
          default:
            break;
        }
      }
    } else if (command === '22') {
      x = Math.floor(Math.random() * 5);
      for (let i = 0; i < x; i += 1) {
        y = Math.floor(Math.random() * 3);
        switch (y) {
          case 0:
            type('z');
            break;
          case 1:
            type('c');
            break;
          case 2:
            type('v');
            break;
          default:
            break;
        }
      }
    } else if (command === '24') {
      x = Math.floor(Math.random() * 5);
      for (let i = 0; i < x; i += 1) {
        y = Math.floor(Math.random() * 4);
        switch (y) {
          case 0:
            up();
            break;
          case 1:
            left();
            break;
          case 2:
            down();
            break;
          case 3:
            right();
            break;
          default:
            break;
        }
      }
    } else if (command === '25') {
      x = Math.floor(Math.random() * 5);
      for (let i = 0; i < x; i += 1) {
        y = Math.floor(Math.random() * 8);
        switch (y) {
          case 0:
            up();
            break;
          case 1:
            left();
            break;
          case 2:
            down();
            break;
          case 3:
            right();
            break;
          case 4:
            type('z');
            break;
          case 5:
            type('x');
            break;
          case 6:
            type('c');
            break;
          case 7:
            type('v');
            break;
          default:
            break;
        }
      }
    } else if (command === '26') {
      x = Math.floor(Math.random() * 5);
      for (let i = 0; i < x; i += 1) {
        y = Math.floor(Math.random() * 4);
        switch (y) {
          case 0:
            up();
            break;
          case 1:
            left();
            break;
          case 2:
            down();
            break;
          case 3:
            right();
            break;
          default:
            break;
        }
      }
      x = Math.floor(Math.random() * 5);
      for (let i = 0; i < x; i += 1) {
        y = Math.floor(Math.random() * 4);
        switch (y) {
          case 0:
            type('z');
            break;
          case 1:
            type('x');
            break;
          case 2:
            type('c');
            break;
          case 3:
            type('v');
            break;
          default:
            break;
        }
      }
    } else if (command === '27') {
      type('x');
      type('x');
    }

    res.json({});
    return next();
  }
}

export default new KeyboardController();
