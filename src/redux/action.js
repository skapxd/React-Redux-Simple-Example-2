// @ts-check
export const enumCounterType = {
  add: "add",
  minus: "minus",
  reset: "reset",
};

/** @param {number} payload */
export const actionAddCounter = (payload = 1) => ({
  type: enumCounterType.add,
  payload,
});

/** @param {number} payload */
export const actionMinusCounter = (payload = 1) => ({
  type: enumCounterType.minus,
  payload,
});

export const actionResetCounter = () => ({
  type: enumCounterType.reset,
});
