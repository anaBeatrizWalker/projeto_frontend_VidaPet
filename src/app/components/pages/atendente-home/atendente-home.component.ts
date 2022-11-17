import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atendente-home',
  templateUrl: './atendente-home.component.html',
  styleUrls: ['./atendente-home.component.css'],
})
export class AtendenteHomeComponent implements OnInit {
  usuarioAtendente: string = 'Atendente';

  constructor() {}

  ngOnInit() {}
}
