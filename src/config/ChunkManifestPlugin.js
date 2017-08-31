class ChunkManifestPlugin {
  apply(compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      const manifest = {
        jsChunks: {},
        cssChunks: {},
      };
      Object.keys(compilation.assets).forEach((filename) => {
        if (filename.indexOf('.js') > -1) {
          manifest.jsChunks[filename] = filename;
        }
        if (filename.indexOf('.css') > -1) {
          manifest.cssChunks[filename] = filename;
        }
      });

      const output = JSON.stringify(manifest);

      compilation.assets['manifest.json'] = {
        source() {
          return output;
        },
        size() {
          return output.length;
        },
      };

      callback();
    });
  }
}

module.exports = ChunkManifestPlugin;
