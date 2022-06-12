const wast2wasm = require('./lib/wast/wast2wasm');
const fs = require('fs/promises');
const { wasmToJs } = require('./lib/wasm/wasm2js');

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

  await fs.writeFile(savePath, buffer); // write wasm file

  const exports = await wasmToJs(buffer)

  console.log('wasmToJs', exports, exports.addTwo)

  console.log('exports.addTwo(2)', exports.addTwo(2), exports.addTwo(3, 3))
};

run();
