import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular addsd';
  output;
  discountRate;

  profileForm = new FormGroup({
    numItems: new FormControl(1),
    price: new FormControl(1),
    state: new FormControl('UT'),
  });

  onSubmit() {
    let taxRate = this.getTaxRate(this.profileForm.controls.state.value);

    let priceTimeItems =
      this.profileForm.controls.numItems.value *
      this.profileForm.controls.price.value;
    this.discountRate = this.getDiscount(priceTimeItems);
    let discountedPrice =
      priceTimeItems - priceTimeItems * (this.discountRate / 100);
    this.output = discountedPrice * (taxRate / 100) + discountedPrice;
    console.warn(this.profileForm.value);
  }

  getDiscount(total: number) {
    if (total >= 50000) {
      return 15;
    }
    if (total >= 10000) {
      return 10;
    }
    if (total >= 7000) {
      return 7;
    }
    if (total >= 5000) {
      return 5;
    }
    if (total >= 1000) {
      return 3;
    }
    return 0;
  }

  getTaxRate(state: string) {
    switch (state) {
      case 'UT':
        return 6.85;
      case 'NV':
        return 8;
      case 'TX':
        return 6.25;
      case 'AL':
        return 4;
      case 'CA':
        return 8.25;
      default:
        return 0;
    }
  }
}
