import AsyncStorage from "@react-native-async-storage/async-storage";

export function setData(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export async function appendData(key, value) {
  let data = getData(key);
  data = { ...data, ...value };
  return await AsyncStorage.setItem(key, JSON.stringify(data));
}

export async function getData(key) {
  const data = await AsyncStorage.getItem(key);
  return JSON.parse(data);
}

export function removeData(key) {
  AsyncStorage.removeItem(key);
}

export function clearStorage() {
  AsyncStorage.clear();
}

const localStorage = {
  setData,
  appendData,
  getData,
  removeData,
  clearStorage,
};

export default localStorage;
