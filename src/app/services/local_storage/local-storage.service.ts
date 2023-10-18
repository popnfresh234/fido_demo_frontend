import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }
  public clearData() {
    localStorage.clear();
  }
  public isPresent(key: string) {
    let present: Boolean = false;
    localStorage.getItem(key) ? present = true : present = false;
    return present;
  }
}
