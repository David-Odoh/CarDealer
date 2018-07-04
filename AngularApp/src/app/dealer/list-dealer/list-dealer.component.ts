import { Component, OnInit } from '@angular/core';
import { DealerService } from './../../services/dealer.service';

@Component({
  selector: 'app-list-dealer',
  templateUrl: './list-dealer.component.html',
  styleUrls: ['./list-dealer.component.css']
})
export class ListDealerComponent implements OnInit {

  constructor(public _dservice: DealerService) { }

   ngOnInit() {
    this._dservice.getDealers();
  }

}
