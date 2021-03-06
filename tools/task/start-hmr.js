import os from 'os'
import webpack from 'webpack'
import chalk from 'chalk'
import express from 'express'
import path from 'path'
import browserSync from 'browser-sync';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConf from '../webpack/webpack.hmr.config'
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages'
import openBrowser from 'react-dev-utils/openBrowser'
// import clearConsole from 'react-dev-utils/clearConsole'
import {
  prepareUrls,
} from 'react-dev-utils/WebpackDevServerUtils'

import { logInfo, getLocalIp } from "../util";

const isDebug = !process.argv.includes('--release');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3003
// const HOST = process.env.HOST || '0.0.0.0'
const HOST = process.env.HOST || getLocalIp()
const isInteractive = process.stdout.isTTY

function createCompilationPromise(name, compiler, config) {
  return new Promise((resolve, reject) => {

    let timeStart = new Date();

    compiler.plugin('compile', () => {
      logInfo(chalk.cyan(`Compiling '${name}'...`))
    });

    compiler.plugin('done', stats => {
      console.info(stats.toString(config.stats));
      const timeEnd = new Date();
      const time = timeEnd.getTime() - timeStart.getTime();
      if (stats.hasErrors()) {
        logInfo(` Failed to compile '${name}' after ${time} ms`)
        reject(new Error('Compilation failed!'));
      } else {
        logInfo(` Finished '${name}' compilation after ${time} ms`)
        resolve(stats);
      }
    });

  })
}

async function start() {
  const server = express();
  const compiler = webpack(webpackConf);

  // server.use(express.static(path.resolve(process.cwd(), './public')));

  server.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConf.output.publicPath,
    quiet: true,
    stats: webpackConf.stats,
  }))

  server.use(webpackHotMiddleware(compiler, {
    log: false,
  }))

  await createCompilationPromise('client', compiler, webpackConf);

  server.listen(DEFAULT_PORT, HOST, function(err) {
    if (err) {
      return console.info(chalk.red(err));
    }
    const address = this.address()
    console.log(chalk.cyan('Starting the development server...\n'));
    console.log(`Server start at ${chalk.magenta.underline(`http://${address.address}:${address.port}`)}`)
    const urls = prepareUrls('http', HOST, DEFAULT_PORT);
    openBrowser(urls.localUrlForBrowser);
  })

  return server;
}

export default start;


