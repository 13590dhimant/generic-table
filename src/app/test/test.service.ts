import {Injectable} from '@angular/core';

@Injectable()
export class TestService {


  constructor() {
  }

  edit(): string {
    return 'return data from server';
  }
}
