import CryptoJS from 'crypto-js';
import RNFetchBlob from 'rn-fetch-blob';
const {fs} = RNFetchBlob;

const getMD5 = originString => {
  return CryptoJS.MD5(originString).toString();
};
const getCacheDirectory = () => {
  return fs.dirs.CacheDir;
};

const createCacheDirectory = async (cacheDir, tmpDir) => {
  const rootDir = fs.dirs.CacheDir;
  const cacheDirParams = rootDir + '/' + cacheDir;
  const tmpDirParams = rootDir + '/' + tmpDir;
  const isCacheDirExists = await fs
    .isDir(cacheDirParams)
    .catch(e => console.log(e));
  if (!isCacheDirExists) {
    await fs.mkdir(cacheDirParams).catch(e => console.log(e));
  }
  const isTmpDirExists = await fs
    .isDir(tmpDirParams)
    .catch(e => console.log(e));
  if (!isTmpDirExists) {
    await fs.mkdir(tmpDirParams).catch(e => console.log(e));
  }
};

const getFiles = async path => {
  const exists = await fs.exists(path).catch(() => []);
  if (!exists) {
    return [];
  }
  const isDir = await fs.isDir(path).catch(() => false);
  if (isDir) {
    const files = await fs.lstat(path);
    if (!files || files.length === 0) {
      return [];
    }
    const tasks = [];
    for (const file of files) {
      if (file.type === 'file') {
        tasks.push(file);
      } else {
        tasks.push(getFiles(file.path));
      }
    }
    const filesArr = await Promise.all(tasks);
    let allfiles = [];
    for (const f of filesArr) {
      allfiles = allfiles.concat(f);
    }
    return allfiles;
  } else {
    return [await fs.stat(path)];
  }
};
const getDirCacheInfo = async subDir => {
  const path = getCacheDirectory();
  const files = await getFiles(path);
  if (!files || files.length === 0) {
    return {count: 0, size: 0};
  }
  let size = 0;
  for (let file of files) {
    // eslint-disable-next-line radix
    size += parseInt(file.size);
  }
  const result = {count: files.length, size: size};
  return result;
};

const clearDirCache = async subDir => {
  const path = getCacheDirectory();
  await fs.unlink(path).catch(e => console.log(e));
  await fs.mkdir(path).catch(e => console.log(e));
};

const fetchFile = async originalUri => {
  RNFetchBlob.config({
    path: getCacheDirectory() + '/image-cache',
  })
    .fetch('GET', originalUri, {})
    .then(res => {
      console.log(res);
      console.log('The file saved to ', res.path());
    });
};
export {getMD5, getCacheDirectory, getDirCacheInfo, clearDirCache, fetchFile};
