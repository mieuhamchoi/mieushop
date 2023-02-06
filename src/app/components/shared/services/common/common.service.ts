import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public contentLoad:boolean = false;
  constructor() {}
  public setContentLoad(value: boolean) {
    this.contentLoad = value;
  }
}
