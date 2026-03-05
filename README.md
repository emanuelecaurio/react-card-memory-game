# React Card Memory Game

<p align="center">
  <a href="#italiano">Italiano</a> •
  <a href="#english">English</a>
</p>

---

<a name="italiano"></a>

## 🇮🇹 Italiano

Memory Game realizzato con React utilizzando icone UTF-8.

Pronto per Mobile e Desktop!

### ✔️ Iniziamo

Puoi installare il modulo tramite `npm` o `yarn`:

```sh
npm install react-card-memory-game
```

```sh
yarn add react-card-memory-game
```

### 💻 Demo
[Demo Live](https://react-card-memory-game.surge.sh/)

### 📁 Struttura del Progetto
Il progetto include una cartella demo inizializzata con Create React App.

Quando esegui il comando ```build``` dal ```package.json``` di reactjs-flip-card, verranno generate le cartelle ```dist``` e ```lib```.

La cartella ```lib``` verrà inserita automaticamente nel progetto demo.

Puoi spostarti nella directory ```demo``` e avviare il progetto tramite lo script del suo package.json, proprio come qualsiasi altra app Create React App.

### 🔨 Utilizzo

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
Questo è il minimo indispensabile per avere un memory game funzionante.

Un esempio più approfondito è disponibile in `demo/src/App.js`

### 🧰 Props

|Nome|Tipo|Default|Descrizione|
|:--|:--:|:-----:|:----------|
|**containerStyle**|<code>CSSProperties</code>|`{}`|Stile opzionale applicato al contenitore|
|**gridNumber**|<code>number</code>|richiesto|Il numero della griglia. Deve essere un numero intero compreso tra 4 e 6|
|**foundPair**|<code>Function</code>|`()=>undefined`|Callback opzionale attivata ogni volta che il giocatore trova una coppia|
|**notFoundPair**|<code>Function</code>|`()=>undefined`|Callback opzionale attivata ogni volta che il giocatore non trova una coppia|
|**gameFinished**|<code>Function</code>|`()=>undefined`|Callback opzionale attivata quando il gioco è terminato (tutte le coppie trovate)|
|**holeCardsColor**|<code>string</code>|`'orange'`|Il colore applicato alle carte|
|**foundCardsColor**|<code>string</code>|`'yellow'`|Il colore applicato alle carte scoperte con successo|
|**frontCardsCss**|<code>string</code>|`''`|`className` opzionale applicata al fronte delle carte|
|**backCardsCss**|<code>string</code>|`''`|`className` opzionale applicata al retro delle carte|

<br/>

### ⭐ Contributi e Supporto ⭐
Contributi di ogni tipo sono benvenuti.

Se questo pacchetto ti è stato utile, per favore considera di mettere una stella ⭐ al progetto su GitHub.

Inoltre, puoi seguirmi sul mio [blog personale su Instagram](https://www.instagram.com/minudaje/) dove condivido contenuti relativi al software e alla musica.

### Curiosità
Questo progetto utilizza il pacchetto [reactjs-flip-card](https://www.npmjs.com/package/reactjs-flip-card), realizzato da me. Dai un'occhiata!

### Licenza
MIT

---

<a name="english"></a>

## 🇺🇸 English

Memory Game made with React using UTF-8 icons.

Mobile & Desktop ready!

### ✔️ Getting Started

You can install the module via `npm` or `yarn`:

```sh
npm install react-card-memory-game
```

```sh
yarn add react-card-memory-game
```

### 💻 Demo
[Live Demo](https://react-card-memory-game.surge.sh/)

### 📁 Project Structure
The project includes a demo folder initialized with Create React App.

When you run the command ```build``` from reactjs-flip-card ```package.json```, a ```dist``` and a ```lib``` folder will be generated.

The ```lib``` folder will be placed automatically into the demo project.

You can move into ```demo``` directory and ```start``` project from its own package.json script, just like any other Create React App.

### 🔨 Usage

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

### 🧰 Props

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

### ⭐ Contributing and Support ⭐
Contributions of any kind are welcome.

If this package was helpful to you, please consider putting a star ⭐ on the GitHub project.

Also, you can follow me on my [Instagram personal blog](https://www.instagram.com/minudaje/) where I share software related content and music.

### Curiosities
This projects uses the package [reactjs-flip-card](https://www.npmjs.com/package/reactjs-flip-card), made by me. Check it out!

### License
MIT

