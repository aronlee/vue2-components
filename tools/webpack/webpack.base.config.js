import webpack from 'webpack'
import path from 'path'
import EslintFriendlyFormatter from 'eslint-friendly-formatter'
import WebpackNotifierPlugin from 'webpack-build-notifier'

import { alias, entries, provides } from "../files-config"
import { mergeModleToEntry } from '../util'

const NodeEnv = process.env.NODE_ENV

// https://github.com/webpack/loader-utils/issues/56
// process.traceDeprecation = true

const isVerbose = process.argv.includes('--verbose');
const distName = 'public';
const reScript = /\.(vue|js)$/;
const reStyle = /\.(css|less|scss|sass)$/;
const reImage = /\.(bmp|gif|jpg|jpeg|png|svg)$/;
const staticAssetName = '[name]_[sha512:hash:base64:7].[ext]'; // 打包后的静态文件名


const minimizeCssOptions = {
  discardComments: { removeAll: true },
};

export default ({ isDebug, performance, plugins, entry = [], watch = false }) => ({
  context: `${process.cwd()}/src`,
  entry: mergeModleToEntry(entries, entry),
  watch: watch,
  // Don't attempt to continue if there are any errors.
  // 一旦发生错误，立即终止
  bail: !isDebug,
  // 开启缓存 [watch 时会默认打开]
  // cache: isDebug,
  // Choose a developer tool to enhance debugging
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: isDebug ? 'eval-source-map' : 'source-map',
  performance: performance || {},
  output: {
    path: `${process.cwd()}/${distName}`,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:7].js', //非入口文件的命名规则
  },
  resolve: {
    alias: alias,
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
			{
        test: /\.(vue|js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          formatter: EslintFriendlyFormatter
        }
			},
			{
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      // js Transform all .js files required somewhere with Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: false,
          },
        }
      },

      // style
      {
        test: reStyle,
        rules: [
					{
						loader: 'vue-style-loader',
					},
          {
            loader: 'css-loader',
            options: {
              // CSS Loader https://github.com/webpack/css-loader
              // importLoaders: 1,
              sourceMap: isDebug,
              // CSS Nano http://cssnano.co/
              minimize: isDebug ? false : minimizeCssOptions,
            },
          },
          // Apply PostCSS plugins including autoprefixer
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './tools/postcss.config.js',
              },
            },
          },
          {
            test: /\.(scss|sass)$/,
            loader: 'sass-loader',
          },
          {
            test: /\.less$/,
            loader: 'less-loader',
          },
        ],
      },

      // // html
      {
        test: /\.html/,
        loader: "html-loader",
      },

      // json
      {
        test: /\.json$/,
        use: 'json-loader',
      },

      // images
      {
        test: reImage,
        oneOf: [
          // Inline lightweight images into CSS
          {
            issuer: reStyle,
            oneOf: [
              // Inline lightweight SVGs as UTF-8 encoded DataUrl string
              {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                  name: staticAssetName,
                  limit: 4096, // 4kb
                },
              },

              // Inline lightweight images as Base64 encoded DataUrl string
              {
                loader: 'url-loader',
                options: {
                  name: staticAssetName,
                  limit: 4096, // 4kb
                },
              },
            ],
          },
          // Or return public URL to image resource
          {
            loader: 'file-loader',
            options: {
              name: staticAssetName,
            },
          },
        ],
      },

      // files
      {
        exclude: [reScript, reStyle, reImage, /\.json$/, /\.txt$/, /\.md$/, /\.html$/],
        loader: 'file-loader',
        options: {
          name: staticAssetName,
        },
      },

      // video
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: staticAssetName,
            limit: 10000,
          },
        },
      },
    ]
  },
  plugins: plugins.concat([
    new webpack.ProvidePlugin(Object.assign({
    }, provides)),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'common'],
      children: true,
      minChunks: 2,
      async: true,
    }),

    new WebpackNotifierPlugin({
      title: 'Webpack compile successfully!',
      alwaysNotify: true
    }),

    new webpack.NamedModulesPlugin(),

    // Moment.js is an extremely popular library that bundles large locale files
    // by default due to how Webpack interprets its code. This is a practical
    // solution that requires the user to opt into importing specific locales.
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // You can remove this if you don't use Moment.js:
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]),
  stats: {
    cached: isVerbose,
    cachedAssets: isVerbose,
    chunks: isVerbose,
    chunkModules: isVerbose,
    colors: true,
    hash: isVerbose,
    modules: isVerbose,
    reasons: isDebug,
    timings: true,
    version: isVerbose,
  },
})
