import {
  enter, type, up, down, left, right,
} from '../models/keyboard';

class KeyboardController {
  post(req, res, next) {
    const { command } = req.body;
	if (command === '1') {
		type('l');
	}
	else if (command === '2') {
		type('i');
	}
	else if (command === '3') {
		type('j');
	}
	else if (command === '4') {
		type('v');
	}
	else if (command === '5') {
		type('c');
	}
	else if (command === '6') {
		type('x');
	}
	else if (command === '7') {
		type('z');
	}
	else if (command === '8') {
		type('k');
	}
	else if (command === '9') {
		type('z');
	}
	else if (command === '10') {
		type('z');
	}
	else if (command === '11') {
		type('c');
	}
	else if (command === '12') {
		type('v');
	}
	else if (command === '13') {
		type('x');
	}
	else if (command === '14') {
		type('x');
	}
	else if (command === '15') {
		type('x');
	}
	else if (command === '16') {
		type('x');
	}
	else if (command === '17') {
		type('x');
	}
	else if (command === '18') {
		type('z');
	}
	
    res.json({});
    return next();
  }
}

export default new KeyboardController();
