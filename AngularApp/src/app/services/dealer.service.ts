import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DealerService {


  BASE_URL = 'http://localhost:5000/cardealers';

  constructor(private http: Http, private router: Router) {
  }

  checkMe: any;
  getDealers() {
    return this.http.get(this.BASE_URL + '/')
      .pipe(
        map(res => {
          this.checkMe = res;
          if (this.checkMe._body !== null) {
            return res.json();
          }
        })
      );
  }

}