export const asciiLog = (parameter, character, count) => {
  const rows = [];
  const dictionary = {
    menorAmayor: "menorAmayor",
    mayorAmenor: "mayorAmenor",
    igual: "igual",
  };
  if (dictionary[parameter] === undefined) {
    throw new Error("Por favor introduce un valor valido");
  }

  switch (dictionary[parameter]) {
    case dictionary.menorAmayor:
      for (let i = 0; i < count; i++) {
        rows.push(character.repeat(i + 1));
      }
      return rows;
    case dictionary.mayorAmenor:
      for (let i = 0; i < count; i++) {
        rows.unshift(character.repeat(i + 1));
      }
      return rows;
    case dictionary.igual:
      for (let i = 0; i < count; i++) {
        rows.push(character.repeat(count * (count / 2)));
      }
      return rows;
  }
};
