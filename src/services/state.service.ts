import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface AppState {
  currentSection: string | null;
  //   age: number;
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private appStateSubject: BehaviorSubject<AppState> = new BehaviorSubject<AppState>({
    currentSection: null,
  });

  appState$: Observable<AppState> = this.appStateSubject.asObservable();

  updateAppState(appState: AppState) {
    this.appStateSubject.next(appState);
  }
}
