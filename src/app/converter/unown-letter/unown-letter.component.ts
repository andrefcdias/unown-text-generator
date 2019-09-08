import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-unown-letter',
  template: `
  <div [ngSwitch]="character">
    <div class="space" *ngSwitchCase="' '"></div>
    <img *ngSwitchDefault [src]="getUrl(character)"/>
  </div>`,
  styles: [`
    .space {
      padding-left: 80px;
    }
  `]
})
export class UnownLetterComponent {
  @Input() character: string;

  getUrl(char: string) {
    return `${environment.unownFolder}/${this.convertCharToFilename(char)}.png`
  }

  private convertCharToFilename(char: string): string {
    switch(char)
    {
      case "?":
        return "qm";
      case "!":
        return "em";
    }

    return char.toLowerCase();
  }
}
