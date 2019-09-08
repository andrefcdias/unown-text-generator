import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form: FormGroup;
  textToConvert: string;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      text: ["", [Validators.required, this.unownSupportedCharacters()]],
    })
  }

  onSubmit() {
    this.textToConvert = this.form.controls.text.value
  }

  unownSupportedCharacters(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const valid = /^[a-z\!\? ]+$/i.test(control.value);
      return valid ? null : {'invalidCharacters': {value: control.value}};
    };
  }
}
