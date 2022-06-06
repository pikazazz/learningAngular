import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss'],
  exportAs: 'FormCreateComponent',
})
export class FormCreateComponent implements OnInit {
  @Output() formData = new EventEmitter();

  constructor() {}
  end_date?: Date;
  start_date?: Date;
  title?: string;
  detail?: string;

  ngOnInit(): void {}

  create() {
    this.formData.emit({
      title: this.title,
      detail: this.detail,
      strat_date: this.start_date,
      end_date: this.end_date,
    });
  }
}
