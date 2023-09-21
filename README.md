
# currenaxt

A currency module that allows you to fetch the values of Turkish Lira in Dollars and Euros.


## 🛠 Installation

You can download the module using NPM or PNPM.

`npm i currenaxt` | `pnpm i currenaxt`
## 📁 Usage
- Fetch usd to try;

```js
const currenaxt = require('currenaxt');

currenaxt.usdToTry().then((data) => {
    console.log(data);
});
```

```json
27.04249982
```

- Fetch eur to try;

```js
const currenaxt = require('currenaxt');

currenaxt.eurToTry().then((data) => {
    console.log(data);
});
```

```json
28.76439711
```
## ✨ Note
Please contact us if you have encountered a bug or error.
https://t.me/unoxdevs