import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.states';
import { EffectGetPublicationsAction } from '../state/actions/publicacion.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private store: Store<AppState> ) {

   this.store.dispatch(new EffectGetPublicationsAction());
  }





}
