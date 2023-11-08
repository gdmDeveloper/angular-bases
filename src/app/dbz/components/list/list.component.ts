import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public listCharacter: Character[] = [{
    name: "Trunks",
    power: 100
  }]

  @Output()
  public onDeleteId:EventEmitter<string> = new EventEmitter();



  onDeleteCharacterById(id:string):void {
    this.onDeleteId.emit(id);
  }

}
