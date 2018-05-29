import moment from 'moment'
import os from 'os'

/**
 *
 * @desc hot热加载的时候每个entry都需要加载这两个uri
 * [
 *   'eventsource-polyfill', // Necessary for hot reloading with IE
 *   'webpack-hot-middleware/client?reload=true',
 * ]
 * @param {Array, Object} entry
 * @param {Array} hotModuels  上面那个数组
 * @returns
 */
export function mergeModleToEntry(entry, hotModuels) {
  const entryType = typeof entry;
  // console.log
  if (entryType === 'array') {
    return Array.prototype.concat.apply(hotModuels, entry)
  }
  if (entryType === 'object') {
    let result = {};
    Object.keys(entry).map(key => {
      result[key] = Array.prototype.concat.apply(hotModuels, entry[key]);
    });
    return result;
  }
  return hotModuels;
}

export function formatTime(time) {
  return `[${moment(time).format('YYYY-MM-DD HH:mm:ss')}]`
}

export function logInfo() {
  console.log.call(console, formatTime(Date.now()), ...arguments)
}

export function getLocalIp() {
  let IPv4
  for(let i = 0; i < os.networkInterfaces().en0.length; i++){
    if(os.networkInterfaces().en0[i].family=='IPv4'){
      IPv4 = os.networkInterfaces().en0[i].address
      break
    }
  }
  return IPv4
}
