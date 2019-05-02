import robot from 'robotjs';

const longPress = async (w, t) => {
  return new Promise((resolve, reject) => {
    robot.keyToggle(w, 'down');
    setTimeout(() => {
      robot.keyToggle(w, 'up');
      resolve();
    }, t);
  });
};

const wait = async (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), t);
  });
};

export const enter = async () => {
  await longPress('enter', 500);
  await wait(2000);
};

export const type = async (word) => {
  await longPress(word, 500);
  await wait(2000);
};

export const up = async () => {
  await longPress('up', 500);
  await wait(2000);
};

export const down = async () => {
  await longPress('down', 500);
  await wait(2000);
};

export const right = async () => {
  await longPress('right', 500);
  await wait(2000);
};

export const left = async () => {
  await longPress('left', 500);
  await wait(2000);
};
