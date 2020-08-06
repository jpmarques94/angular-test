import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { TableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { UITestService } from './services/ui-test.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TableComponent,
    FooterComponent,
    HeaderComponent,
    AddUserComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AddUserComponent,
    TableComponent
  ]
})
export class SharedModule { }
