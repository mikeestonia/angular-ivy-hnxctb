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

  profileForm = new FormGroup({
    numItems: new FormControl(1),
    price: new FormControl(1),
    state: new FormControl('UT'),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.output =
      this.profileForm.controls.numItems.value *
      this.profileForm.controls.price.value;
    console.warn(this.profileForm.value);
  }
}
