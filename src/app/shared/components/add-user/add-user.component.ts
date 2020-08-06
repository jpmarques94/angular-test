import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Input() newUser = '';
  @Output() added = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.added.emit(this.newUser);
    this.newUser = '';
  }
}
