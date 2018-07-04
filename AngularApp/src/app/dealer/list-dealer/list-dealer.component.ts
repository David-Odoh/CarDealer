import { Component, OnInit } from '@angular/core';
import { DealerService } from './../../services/dealer.service';

@Component({
  selector: 'app-list-dealer',
  templateUrl: './list-dealer.component.html',
  styleUrls: ['./list-dealer.component.css']
})
export class ListDealerComponent implements OnInit {
  dealers;
  numberOfDealer;
  
  constructor(public _dservice: DealerService) { }

  ngOnInit() {
    // this.dealers = this._dservice.getDealers();
    // console.log(this.dealers);
  }

  getAllDealers() {
    this._dservice.getDealers()
      .subscribe(dealers => {
        this.dealers = dealers;

        if (this.dealers.length) {
          this.numberOfDealer = this.dealers.length;
        } else {
          this.numberOfDealer = 0;
        }

      });
  }
}
