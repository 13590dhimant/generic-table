import { Injectable } from '@angular/core';

@Injectable()
export class TestService {


  constructor() {
  }

  edit(): string {
    return 'return EDIT data from server';
  }

  view(): string {
    return 'return VIEW data from server';
  }
}
