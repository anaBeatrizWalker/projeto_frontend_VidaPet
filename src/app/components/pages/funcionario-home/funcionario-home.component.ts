import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-home',
  templateUrl: './funcionario-home.component.html',
  styleUrls: ['./funcionario-home.component.css'],
})
export class FuncionarioHomeComponent implements OnInit {
  usuarioFuncionario: string = 'Funcionário';

  constructor() {}

  ngOnInit() {}
}
