import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/content/menu/menu.component';
import { TableComponent } from './components/content/table/table.component';
import { DropdownComponent } from './components/content/dropdown/dropdown.component';
import { HeaderComponent } from './components/content/header/header.component';
import { AdmHomeComponent } from './components/pages/adm-home/adm-home.component';
import { FuncionarioHomeComponent } from './components/pages/funcionario-home/funcionario-home.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    MenuComponent,
    TableComponent,
    DropdownComponent,
    HeaderComponent,
    AdmHomeComponent,
    FuncionarioHomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
