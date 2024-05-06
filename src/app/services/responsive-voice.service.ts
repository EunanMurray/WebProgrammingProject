import { Injectable } from '@angular/core';

declare var responsiveVoice: any;

@Injectable({
  providedIn: 'root',
})
export class TextToSpeechService {

  constructor() { }

  speak(text: string, voice: string = "UK English Female", callback?: () => void): void {
    if (responsiveVoice) {
      responsiveVoice.speak(text, voice, {
        onend: callback
      });
    } else {
      console.error("ResponsiveVoice not loaded!");
    }
  }

}