import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface AppState {
  backgroundColor: string;
//   age: number;
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
    private appStateSubject: BehaviorSubject<AppState> = new BehaviorSubject<AppState>({
        backgroundColor: 'black', // Initial background color
    });

  // Observable to expose the state for components to subscribe
  appState$: Observable<AppState> = this.appStateSubject.asObservable();

  // Method to update the state (BehaviorSubject's value)
  updateAppState(appState: AppState) {
    this.appStateSubject.next(appState);
  }
}
