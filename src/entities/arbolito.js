import { asciiLog, mergeText } from "../utils/module.js";

export const laNave = (character, count) => {
  try {
    const sortBy = {
      menorAmayor: "menorAmayor",
      mayorAmenor: "mayorAmenor",
      igual: "igual",
    };

    // if (character.length >= 3)
    //   throw new Error("Por favor, maximo 3 caracteres.");
    //
    const rows = asciiLog(sortBy.mayorAmenor, character, count);
    const inverseRow = asciiLog(sortBy.menorAmayor, character, count);
    const base = asciiLog(sortBy.igual, character, count);
    const mergeRow = inverseRow.concat(base, rows);
    const result = mergeText(mergeRow);
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

/* 
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i+1));
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
 * */
