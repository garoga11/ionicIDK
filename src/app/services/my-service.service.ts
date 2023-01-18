import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  
  pass = "admin"
  checkPass(text){
    if(text === this.pass)
      return true; 
    else 
      return false;
  }
}
