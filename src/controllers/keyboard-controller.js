import {
  enter, type, up, down, left, right,
} from '../models/keyboard';

class KeyboardController {
  post(req, res, next) {
    const { command } = req.body;
    if (command === 'doubleo') {
      type('oo');
    } else if (command === 'something') {
      type('oow');
      up();
      down();
      left();
      right();
      enter();
    }
    res.json({});
    return next();
  }
}

export default new KeyboardController();
