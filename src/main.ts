import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {App, routes, providers} from './app';
import {MainContainer, NotesContainer, AboutContainer, AuthContainer} from './app/containers';
import {AppBar, NoteCard, NoteCreator, ColorPicker} from './app/ui';

@NgModule({
  declarations: [
    App,
    MainContainer,
    AppBar,
    NotesContainer,
    NoteCard,
    NoteCreator,
    ColorPicker,
    AboutContainer,
    AuthContainer
  ],
  providers,
  imports: [BrowserModule, FormsModule, HttpModule, routes],
  bootstrap: [App]
})
export class AppModule {};
platformBrowserDynamic().bootstrapModule(AppModule);
