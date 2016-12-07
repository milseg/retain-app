import {Component} from '@angular/core';

@Component({
  selector: 'note-container',
  styles: [`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }
  `],
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote)="onCreateNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            *ngFor="let note of notes; let i = index"
            (check)="onChecked(i)"
          >
          </note-card>
        </div>
      </div>
    </div>
  `
})
export class NotesContainer {
  notes = [
    {title: "Minha primeira nota", value: 8.0, color: "red"},
    {title: "Minha segunda nota", value: 10.0, color: "green"},
    {title: "Minha terceira nota", value: 9.9, color: "white"}
  ];
  onChecked(i){
    console.log("Receiving check");
    this.notes.splice(i, 1);
  };
  onCreateNote(newNote){
    console.log("receive create note", newNote);
    this.notes.push(newNote);
  };
};
