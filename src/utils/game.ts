/**
 * Calculates the optimal move for the current turn.
 * @param matches - the amount of matches currently available in the pile
 * @param m - the maximum amount of matches that can be taken from the pile (should be clamped)
 */
export const makeMove = (matches: number, m: number): number => {
  // The optimal move is determined by evaluating whether the move will result in the number
  // of matches being divisible evenly by m + 1 or leaving a remainder of 1.
  if ((matches - 3) % (m + 1) === 0 || (matches - 3) % (m + 1) === 1) {
    return 3
  } else {
    return 1
  }
}

/**
 * If computer can secure the win with one turn, it will play it instead of relying on the `makeMove()` formula
 * @param maxMatches - the amount of matches currently available to play in a single turn
 * @param matches - the amount of matches currently available in the pile
 * @param computerMatches - the amount of matches that our computer currently has
 */
export const canWin = (maxMatches: number, matches: number, computerMatches: number): number => {
  for (let i = 1; i <= maxMatches; i++) {
    // checks if current move leaves the player with zero or one turn
    if (matches - i === 0 || matches - i === 1) {
      // checks if the current move will leave the computer with an even amount of matches
      if ((computerMatches + i) % 2 === 0) {
        return i
      }
    }
  }
  return 0
}

/**
 * Clamps a number between two other numbers. E.g. clamp(25, 1, 24) will return 24, while clamp(24, 27, 32) will return 27
 * @param number - the number you're trying to clamp
 * @param min - minimum number to clamp between
 * @param max - maximum number to clamp between
 */
export const clamp = (number: number, min: number, max: number): number => {
  return Math.min(Math.max(number, min), max)
}
