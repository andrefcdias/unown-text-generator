import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
    }
  `]
})
export class ConverterComponent {
  @Input() text: String = "";

  getChars(): string[] {
    return Array.from((this.text || "").trim());
  }
}
