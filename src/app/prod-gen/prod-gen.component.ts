import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-gen',
  templateUrl: './prod-gen.component.html',
  styleUrls: ['./prod-gen.component.css']
})
export class ProdGenComponent implements OnInit {
  public titulo: string;
  constructor() {
    this.titulo = 'Producto Genérico';

   }

  ngOnInit(): void {
  }

}
