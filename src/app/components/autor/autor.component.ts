import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  autores: string[] = [];

  constructor(private autorService: AutorService) { }

  ngOnInit(): void {
    this.obtenerAutores();
  }

  obtenerAutores(): void{
    this.autores = this.autorService.getAutores();
  }

}
