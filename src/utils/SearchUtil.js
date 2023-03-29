import * as LocalStorage from './LocalStorage';
import localStorageKey from './LocalStorageKey';

const splitSymbol = '|';
const arrayLength = 10;
const saveLocalSearchWord = async word => {
  try {
    const searchWords = await LocalStorage.getItemValue(
      localStorageKey.SEARCHWORD,
    );
    console.log(searchWords);
    if (searchWords != undefined && searchWords !== '') {
      const searchWordArray = searchWords.split(splitSymbol);
      if (!searchWordArray.includes(word)) {
        if (searchWordArray.length < arrayLength) {
          searchWordArray.push(word);
        } else {
          searchWordArray.shift();
          searchWordArray.push(word);
        }
        LocalStorage.setItemValue(
          localStorageKey.SEARCHWORD,
          searchWordArray.join(splitSymbol),
        );
      }
    } else {
      LocalStorage.setItemValue(localStorageKey.SEARCHWORD, word);
    }
  } catch (e) {
    console.log(e);
  }
};

const getLocalSearchWord = async () => {
  try {
    const searchWords = await LocalStorage.getItemValue(
      localStorageKey.SEARCHWORD,
    );
    if (searchWords != undefined && searchWords !== '') {
      console.log(searchWords.split(splitSymbol));
      return searchWords.split(splitSymbol);
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
  }
};

const clearLocalSearchWord = () => {
  LocalStorage.setItemValue(localStorageKey.SEARCHWORD, '');
};

const delLocalSearchWord = async searchWord => {
  try {
    const searchWords = await LocalStorage.getItemValue(
      localStorageKey.SEARCHWORD,
    );
    if (searchWords != undefined && searchWords !== '') {
      const searchWordArray = searchWords.split(splitSymbol);
      searchWordArray.splice(
        searchWordArray.findIndex(item => item === searchWord),
        1,
      );
      await LocalStorage.setItemValue(
        localStorageKey.SEARCHWORD,
        searchWordArray.join(splitSymbol),
      );
      return searchWordArray;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
  }
};
export {
  saveLocalSearchWord,
  getLocalSearchWord,
  clearLocalSearchWord,
  delLocalSearchWord,
};
