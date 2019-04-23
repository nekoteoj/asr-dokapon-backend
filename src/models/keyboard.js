import robot from 'robotjs';

export const enter = () => {
  robot.keyTap('enter');
};

export const type = (word) => {
  robot.typeString(word);
};

export const up = () => {
  robot.keyTap('up');
};

export const down = () => {
  robot.keyTap('down');
};

export const right = () => {
  robot.keyTap('right');
};

export const left = () => {
  robot.keyTap('left');
};
