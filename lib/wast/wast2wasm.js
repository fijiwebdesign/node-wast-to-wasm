const WabtModule = require('./libwat');

async function wast2wasm(text, savePath, features = {}) {
  const wabt = await WabtModule();

  var module = wabt.parseWat(savePath, text, features);
  module.resolveNames();
  module.validate(features);
  var binaryOutput = module.toBinary({ log: true, write_debug_names: true });

  return binaryOutput; // Uint8Array
}

module.exports = wast2wasm;
