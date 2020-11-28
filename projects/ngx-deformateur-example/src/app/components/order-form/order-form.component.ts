import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { State } from '../../models/shared/state.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Input()
  state: State | null = null;

  orderForm: FormGroup;
  firstName = new FormControl('', Validators.required);

  constructor(formBuilder: FormBuilder) {

    this.orderForm = formBuilder.group({
      firstName: ''
    });
  }

  ngOnInit(): void {
    console.log('State: ', this.state);
  }

  onSubmit = () => {
    console.log(this.orderForm);
  }

}
