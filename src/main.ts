import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';
import {App} from './app';
import {MainContainer, NotesContainer} from './app/containers';
import {AppBar, NoteCard, NoteCreator, ColorPicker} from './app/ui';

@NgModule({
  declarations: [
    App,
    MainContainer,
    AppBar,
    NotesContainer,
    NoteCard,
    NoteCreator,
    ColorPicker
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [App]
})
export class AppModule {};
platformBrowserDynamic().bootstrapModule(AppModule);
