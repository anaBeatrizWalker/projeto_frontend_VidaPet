import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm-home',
  templateUrl: './adm-home.component.html',
  styleUrls: ['./adm-home.component.css'],
})
export class AdmHomeComponent implements OnInit {
  usuarioAdm: string = 'Administrador';

  constructor() {}

  ngOnInit() {}
}
