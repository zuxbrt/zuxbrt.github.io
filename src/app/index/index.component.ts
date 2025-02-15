import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-index',
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  animations: [

    trigger('backgroundAnimation', [
      state('color1', style({ backgroundColor: '#040303' })), // 
      state('color2', style({ backgroundColor: '#2A3335' })), // 
      state('color3', style({ backgroundColor: '#021526' })), // 
      state('color4', style({ backgroundColor: '#092635' })), // 
      transition('* => *', animate('1s ease-in-out'))
    ]),

    trigger('fadeInText', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ]),

  ]
})

export class IndexComponent implements OnInit, OnDestroy {
  showText = false;
  bgState: string = 'color1';
  appState: any;

  words: string[] = ['experienced', 'pragmatic', 'detail-oriented', 'efficient'];
  currentWordIndex: number = 0;
  currentText: string = '';
  typing: boolean = false;
  deleting: boolean = false;
  private intervalId: any;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.bgState = 'color1';
    this.showText = true;
    this.stateService.appState$.subscribe((appState) => {
      this.appState = appState;
    });
    this.stateService.updateAppState({backgroundColor: this.bgState});
    this.startTyping();
  }

  ngOnDestroy() {
    // Clean up the interval when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startTyping(){
    let word = this.words[this.currentWordIndex];
    let charIndex = 0;
    let delay = 200;

    this.typing = true;
    this.deleting = false;

    this.intervalId = setInterval(() => {
      if (this.typing) {
        this.currentText += word[charIndex];
        charIndex++;

        if (charIndex === word.length) {
          clearInterval(this.intervalId);
          this.typing = false;

          setTimeout(() => this.startDeleting(word), 1000);
        }
      }
    }, delay);
  }

  startDeleting(word: string) {
    let charIndex = word.length - 1;
    this.deleting = true;

    this.intervalId = setInterval(() => {
      if (this.deleting) {
        this.currentText = this.currentText.slice(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
          clearInterval(this.intervalId); 
          this.deleting = false;

          this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
          setTimeout(() => this.startTyping(), 500);
        }
      }
    }, 100);
  }

  changeColor(num: number){
    this.bgState = `color${num}`;

    this.stateService.updateAppState({backgroundColor: `color${num}`});
  }
}
