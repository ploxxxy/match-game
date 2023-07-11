export const makeMove = (matches: number, m: number) => {
	if ((matches - 3) % (m + 1) === 0 || (matches - 3) % (m + 1) === 1) {
		return 3
	} else {
		return 1
	}
}

export const canWin = (maxMatches: number, matches: number, playerMatches: number) => {
	for (let i = 0; i < maxMatches; i++) {
		if (matches - i === 0 || matches - i === 1) {
			if ((playerMatches + i) % 2 === 0) {
				console.log(`can win by taking ${i} matches resulting in ${matches - i} total.`)
			}
		}
	}
}

export const clamp = (number: number, min: number, max: number) => {
	return Math.min(Math.max(number, min), max)
}

export const didPlayerWin = (playerMatches: number) => {
	return playerMatches % 2 === 0
}
