export const makeMove = (matches: number, m: number) => {
  if ((matches - 3) % (m + 1) === 0 || (matches - 3) % (m + 1) === 1) {
    return 3
  } else {
    return 1
  }
}

export const canWin = (maxMatches: number, matches: number, computerMatches: number) => {
  for (let i = 1; i <= maxMatches; i++) {
    if (matches - i === 0 || matches - i === 1) {
      if ((computerMatches + i) % 2 === 0) {
        console.debug(`playing a non-standard move: -${i}`)
        return i
      }
    }
  }
  return 0
}

export const clamp = (number: number, min: number, max: number) => {
  return Math.min(Math.max(number, min), max)
}

export const didPlayerWin = (playerMatches: number) => {
  return playerMatches % 2 === 0
}
