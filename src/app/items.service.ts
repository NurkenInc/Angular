import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private data: string[] = [
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
    "Element 5"
  ];
  getData(): string[] {
    return this.data;
  }
  addData(name: string) {
    this.data.push(name);
  }
  
  constructor() { }
}
