import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { StoreHelper } from './store-helper.ts';
import 'rxjs/Rx';

@Injectable()
export class NoteService{
  path: string = '/notes';
  constructor(
    private api: ApiService,
    private storeHelper: StoreHelper
  ) {}

  createNote(note) {
    return this.api.post(this.path, note)
              .do(savedNote => this.storeHelper.add('notes', savedNote));
  }

  getNotes() {
    return this.api.get(this.path)
              .do(res => this.storeHelper.update('notes', res.data));
  }

  completeNote(note) {
    return this.api.delete(`${this.path}/${note.id}`)
                  .do(res => this.storeHelper.findAndDelete('notes', res.id));
  }
}
