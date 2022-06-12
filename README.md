# Wast to Wasm compile with Node.js

Compiles JS -> wast -> wasm with JS.

The `lib/wast/libwat` is wat -> wasm compiler compiled to JS.

### Example: wast to wasm

```
const wast2wasm = require('./lib/wast/wast2wasm');
const fs = require('fs');

const run = async () => {
  const text = `(module
    (func (export "addTwo") (param i32 i32) (result i32)
      local.get 0
      local.get 1
      i32.add))`;
  const savePath = './files/wasm/addTo.wasm';
  const bin = await wast2wasm(text, savePath);
  console.log(bin);
  const buffer = bin?.buffer;

  if (!buffer) throw new Error('Failed to create binary wasm file');

  fs.writeFileSync(savePath, buffer); // write wasm file
};

run();
```

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/node-w8cssv)
