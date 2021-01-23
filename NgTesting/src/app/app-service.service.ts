import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  public getData() : string{
    return 'Hello World!';
  }
}
