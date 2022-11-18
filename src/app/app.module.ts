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
import { AtendenteHomeComponent } from './components/pages/atendente-home/atendente-home.component';
import { FormComponent } from './components/content/form/form.component';
import { LoginComponent } from './components/pages/login/login.component';

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
    AtendenteHomeComponent,
    FormComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
