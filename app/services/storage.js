// @flow

import { AsyncStorage } from 'react-native';

async function set(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}

async function get(key: string) {
  let value;
  try {
    value = await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
  return value;
}

async function remove(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
}

const storageService = {};
storageService.set = set;
storageService.get = get;
storageService.remove = remove;


export default storageService;
