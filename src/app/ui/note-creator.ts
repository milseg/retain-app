import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'note-creator',
  styles: [`
    .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    .full {
      height: 100px;
    }
  `],
  template: `
  <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
      <form class="row" (submit)="onCreateNote(newNote)">
        <input
          type="text"
          [(ngModel)]="newNote.title"
          name="newNoteTitle"
          placeholder="Title"
          class="col-xs-10 title"
          *ngIf="expandForm"
        >
        <input
          type="text"
          [(ngModel)]="newNote.value"
          name="newNoteValue"
          placeholder="Take a note..."
          class="col-xs-10"
          (focus)="toggle(true)"
        >
        <div class="actions col-xs-12 row between-xs"
             *ngIf="expandForm">
          <color-picker (select)="onSelectColor($event)"></color-picker>
          <button
            type="submit"
            class="btn-light"
           >
            Criar
          </button>
          <button
            type="button"
            class="btn-light"
            (click)="reset(newNote)"
           >
            Resetar
          </button>
        </div>
      </form>
      <pre>{{newNote | json}}</pre>
    </div>
  `
})
export class NoteCreator {
  @Output() createNote = new EventEmitter();
  expandForm: boolean = false;
  newNote = {
    title: '',
    value: '',
    color: 'white'
  };
  toggle(val){
    this.expandForm = val;
  };
  onCreateNote(data){
    const {title, value} = data;
    if(!title || !value) {
      console.log("title or value empty");
      return;
    }
    console.log("emmit create note", data);
    this.createNote.next(Object.assign({}, data));
    this.reset(data);
  };
  reset(data){
    data.title = '';
    data.value = '';
    data.color = 'white';
    this.toggle(false);
  };
  onSelectColor(color) {
    this.newNote.color = color;
  }
};
