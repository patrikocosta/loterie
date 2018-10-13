import { Injectable } from '@angular/core';


@Injectable()
export class StorageService {

  constructor() { }

  setStorage(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  getStorage(key): string {
    return window.localStorage.getItem(key);
  }


  getStorageObject<T>(key): T {
    return JSON.parse(window.localStorage.getItem(key)) as T;
  }

  setStorageObject(key: string, value: object): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }


  saveLogin(login) {
    window.sessionStorage.setItem('login', login);
  }



}
