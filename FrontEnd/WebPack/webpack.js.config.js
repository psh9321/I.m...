const path = require("path");

module.exports = (env, argv) => {

  const isDevelopment = argv.mode === "development";

  const option = { 
    mode: argv.mode,
    
    devtool: isDevelopment ? "source-map" : false,
    entry: './js/source/index.js', // 빌드할 시작 JS 파일 경로
    output: {
      library : "WebPackBundlerJS",
      libraryTarget: 'umd',
      libraryExport: 'default',
      globalObject: 'this',
      filename: 'bundler.min.js', // 번들된 JS 파일 이름
      path: path.resolve(__dirname,"./js"), // 번들된 파일이 생성될 폴더 경로
    },
    watch : isDevelopment,
    watchOptions: {
        ignored: /node_modules/,
    },
    module : {
      rules : [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
        }
      ]
    }
  }

  return option
};

