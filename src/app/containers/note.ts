import {Component, OnDestroy} from '@angular/core';
import {NoteService} from '../services';
import {Store} from '../store';
import {Subscription} from 'rxjs/Rx';

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
export class NotesContainer implements OnDestroy {
  constructor(
    private noteService: NoteService,
    private store: Store,
  ) {
    noteService.getNotes().subscribe();//how is subscribe call useful?
                                       //Observables are lazy and execute if and only if it has at least one subscription
    this.notesSub = this.store.changes
      .map(data => data.notes)//maps sequence of notes states
      .subscribe(notes => this.notes = notes);
  }
  notes = [
    //{title: "Minha primeira nota", value: 8.0, color: "red"},
    //{title: "Minha segunda nota", value: 10.0, color: "green"},
    //{title: "Minha terceira nota", value: 9.9, color: "white"}
  ];
  notesSub: Subscription;

  ngOnDestroy(){
    console.log("Destroy notes");
    this.notesSub.unsubscribe();//avoids multiple subscribes
  }
  onChecked(note, i){
    console.log("Receiving check");
    this.noteService.completeNote(note)
      .subscribe();
  };
  onCreateNote(newNote){
    console.log("receive create note", newNote);
    this.noteService.createNote(newNote)
        .subscribe();
  };
};
