const fs = require('fs/promises')

const defaultOpts = {
  env: {
    memory: new WebAssembly.Memory({ initial: 256 }),

    table: new WebAssembly.Table({
      initial: 0,
      element: 'anyfunc',
    }),
  },
}

async function wasmToJs(buffer, opts) {
  opts = opts || defaultOpts
  const module = await WebAssembly.compile(buffer)
  return new WebAssembly.Instance(module, opts).exports
}

async function wasmFileToJs(file, opts) {
  const buffer = await fs.readFile(file)
  return wasmToJs(buffer, opts)
}

module.exports = { wasmToJs, wasmFileToJs }
