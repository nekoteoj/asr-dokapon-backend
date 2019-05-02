import { enter, type, up, down, left, right } from '../models/keyboard';

class KeyboardController {
  post(req, res, next) {
    const { command } = req.body;
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
      type('x');
    } else if (command === '7') {
      type('z');
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
    } else if (command === '22') {
    } else if (command === '24') {
    } else if (command === '25') {
    } else if (command === '26') {
    }

    res.json({});
    return next();
  }
}

export default new KeyboardController();
