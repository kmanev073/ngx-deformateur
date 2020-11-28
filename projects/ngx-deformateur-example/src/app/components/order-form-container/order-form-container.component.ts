import { Component, OnInit } from '@angular/core';
import { State } from '../../models/shared/state.model';
import { Guid } from 'guid-typescript';

import 'reflect-metadata';

@Component({
  selector: 'app-order-form-container',
  templateUrl: './order-form-container.component.html',
  styleUrls: ['./order-form-container.component.scss']
})
export class OrderFormContainerComponent {
  state: State = new State('Texas', Guid.create());

  constructor() {
    const wtf: any = Reflect.getMetadata('required', this.state, 'id');

    console.log('meta:', wtf);
  }
}
