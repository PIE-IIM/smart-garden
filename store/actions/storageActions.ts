import * as SecureStore from 'expo-secure-store';

export class StorageActions {
  constructor() {}

  putToken = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
  };

  getToken = async (token: string): Promise<string | null> => {
    const item = await SecureStore.getItemAsync(token);
    return item;
  };

  deleteToken = async (token: string) => {
    await SecureStore.deleteItemAsync(token);
  };
}
