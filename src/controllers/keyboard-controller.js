import {
  enter, type, up, down, left, right,
} from '../models/keyboard';

class KeyboardController {
  post(req, res, next) {
    const { command } = req.body;
    if (command === '1') {
	right();
}
else if (command === '2') {
	up();
}
else if (command === '3') {
	left();
}
else if (command === '4') {
	down();
}
else if (command === '5') {
	type('v');
}
else if (command === '6') {
	type('c');
}
else if (command === '7') {
	type('x');
}
else if (command === '8') {
	type('z');
}
else if (command === '9') {
	type('z');
	type('z');
}
else if (command === '10') {
	type('z');
	type('z');
}
else if (command === '11') {
	type('z');
	type('z');
}
else if (command === '16') {
	type('z');
}
else if (command === '17') {
	type('c');
}
else if (command === '18') {
	type('v');
}
else if (command === '19') {
	type('x');
}
else if (command === '20') {
	type('z');
}
else if (command === '21') {
	type('z');
}
else if (command === '22') {
	type('z');
}
else if (command === '23') {
	type('x');
}
else if (command === '24') {
	type('x');
}
else if (command === '25') {
	type('x');
}
else if (command === '26') {
	type('z');
}
else if (command === '30') {
	right();
}
else if (command === '31') {
	left();
}
else if (command === '32') {
	up();
}
else if (command === '33') {
	down();
}
    res.json({});
    return next();
  }
}

export default new KeyboardController();
