import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss'],
  exportAs: 'FormCreateComponent',
})
export class FormCreateComponent implements OnInit {
  @Output() formData = new EventEmitter();

  constructor() {}

  end_date = new FormControl(null, Validators.required);
  start_date = new FormControl(null, Validators.required);
  title = new FormControl(null, Validators.required);
  detail = new FormControl(null, Validators.required);
  ngOnInit(): void {}

  create() {
    if(this.end_date.invalid || this.start_date.invalid ||this.title.invalid||this.detail.invalid){
      return ;
    }
    this.formData.emit({
      title: this.title.value,
      detail: this.detail.value,
      strat_date: this.start_date.value,
      end_date: this.end_date.value,
    });
  }
}
