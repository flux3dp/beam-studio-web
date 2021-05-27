import { IStorage, StorageKey } from 'src/interfaces/core-interfaces/IStorage';

class LocalStorage implements IStorage {
  // eslint-disable-next-line class-methods-use-this
  get(name: StorageKey): any {
    return window.localStorage.getItem(name);
  }

  set(name: StorageKey, val: any): IStorage {
    window.localStorage.setItem(name, val);
    return this;
  }

  removeAt(name: StorageKey): IStorage {
    window.localStorage.removeItem(name);
    return this;
  }

  clearAll(): IStorage {
    window.localStorage.clear();
    return this;
  }

  clearAllExceptIP(): IStorage {
    const ip = this.get('poke-ip-addr');
    this.clearAll();
    this.set('poke-ip-addr', ip);
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  isExisting(key: StorageKey): boolean {
    return window.localStorage.getItem(key) === null;
  }
}

const storage = new LocalStorage();

export default storage;
