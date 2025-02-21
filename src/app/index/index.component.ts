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

    // trigger('backgroundAnimation', [
    //   state('color1', style({ backgroundColor: 'var(--color1)' })), // 
    //   state('color2', style({ backgroundColor: 'var(--color2)' })), // 
    //   state('color3', style({ backgroundColor: 'var(--color3)' })), // 
    //   state('color4', style({ backgroundColor: 'var(--color4)' })), // 
    //   transition('* => *', animate('1s ease-in-out'))
    // ]),

    trigger('fadeInText', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ]),

    trigger('foldButton', [
      state('visible', style({
        width: '120px',  // Default button width
        opacity: 1,
        transform: 'scale(1)'
      })),
      state('folded', style({
        width: '0px',  // Folded width
        opacity: 0,
        transform: 'scale(0)'  // Moves to the right
      })),
      transition('visible => folded', [
        animate('0.5s ease-in-out')
      ]),
      transition('folded => visible', [
        animate('0.5s ease-in-out')
      ])
    ])

  ]
})

export class IndexComponent implements OnInit, OnDestroy {
  showText = false;
  bgState: string = 'color1';
  appState: any;

  words: string[] = ['experienced', 'pragmatic', 'detail-oriented', 'passionate'];
  currentWordIndex: number = 0;
  currentText: string = '';
  typing: boolean = false;
  deleting: boolean = false;
  private intervalId: any;

  isAboutFolded = false;
  isCaseStudyFolded = false;
  isContactFolded = false;

  isAboutVisible = true;
  isCaseStudyVisible = true;
  isContactVisible = true;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    // this.bgState = 'color1';
    this.showText = true;
    this.stateService.appState$.subscribe((appState) => {
      this.appState = appState;
    });
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
    // this.bgState = `color${num}`;
    // this.stateService.updateAppState({backgroundColor: `color${num}`});
  }
  
  setSection(section: string){

    if(!this.isAboutVisible || !this.isContactVisible || !this.isCaseStudyVisible) return;

    this.isAboutFolded = true;
    this.isCaseStudyFolded = true;
    this.isContactFolded = true;
    this.showText = false;

    setTimeout(() => {
      this.isAboutVisible = false;
      this.isCaseStudyVisible = false;
      this.isAboutVisible = false;
    },500);

    this.stateService.updateAppState({currentSection: section});


    switch (section) {
      case 'about':
        break;

      case 'casestudy':
        break;

      case 'contact':
        break;
    
      default:
        break;
    }
  }

  resetSections(){
    setTimeout(() => {
      if(this.isAboutFolded) this.isAboutFolded = false;
      if(this.isCaseStudyFolded) this.isCaseStudyFolded = false;
      if(this.isContactFolded) this.isContactFolded = false;
      this.showText = true;
    },500);
    setTimeout(() => {
      if(!this.isCaseStudyVisible) this.isCaseStudyVisible = true;
      if(!this.isContactVisible) this.isContactVisible = true;
      if(!this.isAboutVisible) this.isAboutVisible = true;
      this.stateService.updateAppState({currentSection: null});
    },50);
  }

}
