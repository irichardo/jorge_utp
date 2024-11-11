export const mergeText = (parameter) => {
  let result = "";
  for (const row of parameter) {
    result = result + row + "\n";
  }
  return result;
};
