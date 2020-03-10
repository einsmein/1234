
export function generateBong() {
  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let bong = [];
  for (var i=0; i<4; i++) {
    const rand = Math.floor(Math.random() * digits.length);
    let removed = digits.splice(rand, 1);
    bong = bong.concat(removed);
  }
  return bong.join("");
}

export function parseGuess(guess) {
  return guess.split("").map(val => parseInt(val));
}

export function checkChangeGuess(guess, history) {
  const digits = parseGuess(guess);
  console.log(digits);

  if (digits.includes(NaN)) 
    throw "number only";
  if ((new Set(digits)).size !== digits.length)
    throw "Can't input double digit";

}

export function checkSubmitGuess(guess, history) {
  const digits = parseGuess(guess);
  if (digits.length < 4) throw "not done";

  // Check for duplicate guess
  const historyJson = JSON.stringify(history);
  const digitsJson = JSON.stringify(digits);
    console.log(historyJson.indexOf(digitsJson));
  if (historyJson.indexOf(digitsJson) !== -1) {
    throw "You've guessed this before";
  }

  return digits;
}

export function isCorrectGuess(guess, answer) {
  return guess === answer;
}
