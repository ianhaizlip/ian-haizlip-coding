import { Component, OnInit } from '@angular/core';
import {Address} from './address';

@Component({
  selector: 'irh-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }

  addressSF: Address = {
    street: '61 Villa Terrace',
    city: 'San Francisco',
    state: 'CA',
    zip: 94114
  };
  addressDEN: Address = {
    street: '165 N Gilpin St.',
    city: 'Denver',
    state: 'CO',
    zip: 80218
  };

  address: Address;

  changeAddress(currentAddress: Address): void {
    this.address = currentAddress;
  }

  ngOnInit() {
    this.address = this.addressDEN;
  }



}
