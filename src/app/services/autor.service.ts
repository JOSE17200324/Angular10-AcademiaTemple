import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  autores: string[] = ['Fernando Herrera', 'Daniel Urrego', 'Leoncio Galdoz', 'Dorian Correa', 'Lirio Lopez'];

  constructor() { }

  getAutores(): string[]{
    return this.autores;
  }
}
