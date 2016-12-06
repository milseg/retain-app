import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {App} from './app';
import {MainContainer, NotesContainer} from './app/containers';
import {AppBar, NoteCard} from './app/ui';

@NgModule({
  declarations: [
    App,
    MainContainer,
    AppBar,
    NotesContainer,
    NoteCard
  ],
  imports: [BrowserModule],
  bootstrap: [App]
})
export class AppModule {};
platformBrowserDynamic().bootstrapModule(AppModule);
