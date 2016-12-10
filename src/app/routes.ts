import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotesContainer, MainContainer, AboutContainer, AuthContainer } from './containers';
import { AuthService } from './services';

export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: MainContainer,
    canActivate: [AuthService],
    children: [
      {path: '', component: NotesContainer},
      {path: 'about', component: AboutContainer}
    ]
  },
  {
    path: 'auth',
    component: AuthContainer
  },
  {path: '**', redirectTo: ''}//anything else --> redirect
])
