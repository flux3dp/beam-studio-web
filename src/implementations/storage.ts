import { IStorage } from 'src/interfaces/core-interfaces/IStorage';

class LocalStorage implements IStorage {
  // eslint-disable-next-line class-methods-use-this
  get(name: string): any {
    return window.localStorage.getItem(name);
  }

  set(name: string, val: any): IStorage {
    window.localStorage.setItem(name, val);
    return this;
  }

  removeAt(name: string): IStorage {
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
  isExisting(key: string): boolean {
    return window.localStorage.getItem(key) === null;
  }
}

const storage = new LocalStorage();

export default storage;
