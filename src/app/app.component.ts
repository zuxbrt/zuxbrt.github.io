import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    IndexComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  backgroundColor: string = 'black';

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.appState$.subscribe((appState) => {
      this.backgroundColor = appState.backgroundColor;
      this.updateBackgroundColor(appState.backgroundColor);
    });
  }

  updateBackgroundColor(color: string){
    switch (color) {
      case 'color1':
        document.body.style.backgroundColor = 'var(--color1)';
        break;
      case 'color2':
        document.body.style.backgroundColor = 'var(--color2)';
        break;
      case 'color3':
        document.body.style.backgroundColor = 'var(--color3)';
        break;
      case 'color4':
        document.body.style.backgroundColor = 'var(--color4)';
        break;
    
      default:
        break;
    }
    
  }
  
}
