import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotesContainer, MainContainer, AboutContainer } from './containers';


export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: MainContainer,
    children: [
      {path: '', component: NotesContainer},
      {path: 'about', component: AboutContainer}
    ]
  },
  {path: '**', redirectTo: ''}//anything else --> redirect
])
