# React Card Memory Game
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/react-card-memory-game?color=g"> <img alt="Snyk Vulnerabilities for npm package" src="https://img.shields.io/snyk/vulnerabilities/npm/react-card-memory-game?color=g">

Memory Game made with React using UTF-8 icons.

Mobile & Desktop ready!

**works with**: `React >= 16.8`
## ✔️ Getting Started

You can install the module via `npm` or `yarn`:

```sh
npm install react-card-memory-game
```

```sh
yarn add react-card-memory-game
```

## 💻 Demo
[Live Demo](https://react-card-memory-game.surge.sh/)

##  Project Structure
The project includes a demo folder initialized with Create React App.

When you run the command ```build``` from first-level ```package.json```, a ```dist``` and a ```lib``` folder will be generated.

The ```lib``` folder will be placed automatically into the demo project.

You can move into ```demo``` directory and ```start``` project from its own package.json script, just like any other Create React App.

##  Usage

```js
import MemoryGame from 'react-card-memory-game'

function App() {
    return (
       <div>
           <MemoryGame gridNumber={4}/>
       </div>
    );
}
```
This is the bare minimum to have a working memory game.

A more in-depth example is available on `demo/src/App.js`
##  Props

|Name|Type|Default|Description|
|:--|:--:|:-----:|:----------|
|**containerStyle**|<code>CSSProperties</code>|`{}`|Optional style applied to the container|
|**gridNumber**|<code>number</code>|required|The grid number. Must be an Integer number between 4 and 6|
|**foundPair**|<code>Function</code>|`()=>undefined`|Optional callback triggered everytime the player find a pair|
|**notFoundPair**|<code>Function</code>|`()=>undefined`|Optional callback triggered everytime the player do not find a pair |
|**gameFinished**|<code>Function</code>|`()=>undefined`|Optional callback triggered when the game is finished (all pairs found)|
|**holeCardsColor**|<code>string</code>|`'orange'`|The color applied to the cards|
|**foundCardsColor**|<code>string</code>|`'yellow'`|The color applied to the successfully discovered cards|
|**frontCardsCss**|<code>string</code>|`''`|Optional `className` applied to the front of the cards|
|**backCardsCss**|<code>string</code>|`''`|Optional `className` applied to the back of the cards|

<br/>

## License
MIT
