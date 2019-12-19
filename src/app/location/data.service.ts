import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  save = [];
 
  constructor() { }
 
  setData(id, data) {
    this.save[id] = data;
    this.save.push(data);
    // this.setPlace();
  }

  setPlace(){
    localStorage.setItem('Place', JSON.stringify(this.save));
  }
 
  getData(id) {
    return this.save[id];
  }
}
