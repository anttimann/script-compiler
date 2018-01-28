const arrowFunction = (value) => {
  const changedValue = value + 1;
  return changedValue;
};

const constVariable = 123;
console.log(arrowFunction(constVariable)); // eslint-disable-line no-console
