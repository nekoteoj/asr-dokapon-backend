import robot from 'robotjs';

export const enter = () => {
  robot.keyToggle('enter', 'down');
  setTimeout(() => robot.keyToggle('enter', 'up'), 500);
};

export const type = (word) => {
  robot.keyToggle(word, 'down');
  setTimeout(() => robot.keyToggle(word, 'up'), 500);
};

export const up = () => {
  robot.keyToggle('up', 'down');
  setTimeout(() => robot.keyToggle('up', 'up'), 500);
};

export const down = () => {
  robot.keyToggle('down', 'down');
  setTimeout(() => robot.keyToggle('down', 'up'), 500);
};

export const right = () => {
  robot.keyToggle('right', 'down');
  setTimeout(() => robot.keyToggle('right', 'up'), 500);
};

export const left = () => {
  robot.keyToggle('left', 'down');
  setTimeout(() => robot.keyToggle('left', 'up'), 500);
};
