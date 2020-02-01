import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../../models/offer.model';

@Component({
  selector: 'app-tarif-card',
  templateUrl: './tarif-card.component.html',
  styleUrls: ['./tarif-card.component.scss']
})
export class TarifCardComponent implements OnInit {

  @Input() Offerdata: Offer;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
