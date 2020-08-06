import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data = [];
  @Output() delete = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() deleteAllEvent = new EventEmitter<any>();
  editAllMode = false;

  constructor() { }

  ngOnInit(): void {
    this.transformToDataSource(this.data);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.transformToDataSource(changes.data.currentValue);
  }

  transformToDataSource(data) {
    this.data = [...data].map((el, index) => ({ ...el, id: index }));
  }

  onRowDelete(index) {
    this.delete.emit(index);
  }

  onRowEdit(user) {
    this.edit.emit(user);
  }

  editAll(dt) {
    this.editAllMode = true;
    this.data.forEach(element => {
      dt.initRowEdit(element);
    });
  }

  deleteAll() {
    this.deleteAllEvent.emit();
  }

  saveAll(dt) {
    this.data.forEach((rowData, index) => {
      const rowEl = document.getElementsByClassName('table-row')[index];
      dt.saveRowEdit(rowData, rowEl);
    });
    this.editAllMode = false;
  }
}
