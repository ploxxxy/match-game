# Take-Away — match game
This is my test assignment for an internship position as a React Native dev in [Stormotion](https://stormotion.io/portfolio/).
I used React with TypeScript and Vite to build this project. [HeadlessUI's Transition](https://headlessui.com/react/transition)
and [react-icons](https://react-icons.github.io/react-icons/) are used in some parts of
the codebase, but the whole UI and its components are custom.

### To build the project:
be sure to edit `vite.config.ts` [appropriately](https://vitejs.dev/guide/build.html#public-base-path):
```diff
export default defineConfig({
  plugins: [react()],
-  base: '/match-game/',
})
```

After that you're free to run
- `npm run dev` - development runtime
- `npm run build` - build the project
- `npm run preview` - build preview

## Images
<details>
  <summary>Image #1 - Main screen</summary>
  <img src="https://github.com/ploxxxy/match-game/assets/71073152/9bc43966-32d2-4342-b4c5-826df9a7d3fe" alt="Image #1" />
</details>

<details>
  <summary>Image #2 - Game screen</summary>
  <img src="https://github.com/ploxxxy/match-game/assets/71073152/84094b1e-1441-4c15-832d-a68fb9905735" alt="Image #2" />
</details>

## Introduction
Two people are playing a game. From the pile of 25 matches, each player takes either 1, 2 or 3 matches on each turn. 
The game is over once all matches are taken. Whoever has the even amount of matches wins.

## Your mission
Create an app/simulation where users can play against AI. The player goes first.
## Requirements
- You can use any JS framework, or even no framework at all;
- An app should have a user interface (not a command line);
- AI should make decisions based on an optimal strategy (not just picking a random number of matches);
- Give preference to Emoji instead of images;
- Share the result in a form of git repository with us.
## Will be a plus
- TypeScript;
- React Native or React;
- React Hooks.
## Bonus tasks
These items are optional, but we would love to see them:
- [x] Add a second mode where the first move is made by AI. The user can select the game mode;
- [x] Implement the general solution when there are 2n + 1 matches in the pile and the number of matches allowed to take on each turn is from 1 to m. The user can adjust the parameters n and m.
