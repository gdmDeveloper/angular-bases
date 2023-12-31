import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    public heroNames: string[] = ["Spiderman","Hulk","Ironman","Thor","She Hulk"];
    public heroeBorrado: string | undefined = "";
    removeLastHero(): void {
       this.heroeBorrado = this.heroNames.pop();
    }

}
