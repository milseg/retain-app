import {Component} from '@angular/core';
import {NoteService} from '../services';

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
            (check)="onChecked($event, i)"
          >
          </note-card>
        </div>
      </div>
    </div>
  `
})
export class NotesContainer {
  constructor(private noteService: NoteService) {
    noteService.getNotes().subscribe(res => this.notes = res.data);
  }
  notes = [
    //{title: "Minha primeira nota", value: 8.0, color: "red"},
    //{title: "Minha segunda nota", value: 10.0, color: "green"},
    //{title: "Minha terceira nota", value: 9.9, color: "white"}
  ];
  onChecked(note, i){
    console.log("Receiving check");
    this.noteService.completeNote(note)
      .subscribe(() => this.notes.splice(i, 1));
  };
  onCreateNote(newNote){
    console.log("receive create note", newNote);
    this.noteService.createNote(newNote)
        .subscribe(note => this.notes.push(note));
  };
};
