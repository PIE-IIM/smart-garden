import * as SecureStore from 'expo-secure-store';

export class StorageActions {
  constructor() {}

  putToken = (key: string, value: string) => {
    SecureStore.setItem(key, value);
  };

  getToken = (token: string): string | null => {
    const item = SecureStore.getItem(token);
    return item;
  };

  deleteToken = async (token: string) => {
    await SecureStore.deleteItemAsync(token);
  };
}
