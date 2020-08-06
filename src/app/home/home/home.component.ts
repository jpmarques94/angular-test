import { Component, OnInit } from '@angular/core';
import { UITestService } from './../../shared/services/ui-test.service';

interface Usernames {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource: Usernames[] = [];

  constructor(private UITestService: UITestService) { }

  ngOnInit(): void {
    this.getDataFromApi();
  }

  getDataFromApi() {
    this.UITestService.getData().subscribe((data) => {
      this.dataSource = [...data];
    });
  }

  addNewUser(event) {
    const newUser: Usernames = { name: event };
    this.dataSource = [...this.dataSource, newUser];
  }

  editUser(user) {
    console.log(user);
  }

  deleteUser(position) {
    const removeArray = [...this.dataSource];
    removeArray.splice(position, 1);
    this.dataSource = removeArray;
  }

  deleteAll() {
    this.dataSource = [];
  }
}
