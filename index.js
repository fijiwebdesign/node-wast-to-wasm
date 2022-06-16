const { wast2wasm } = require('./lib/wast/wast2wasm');
const { wasmToJs } = require('./lib/wasm/wasm2js');

module.exports = { wast2wasm, wasmToJs };
