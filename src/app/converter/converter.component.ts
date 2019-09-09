import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import htmlToImage from 'html-to-image';
import * as download from 'downloadjs';

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
    @Input() text: String = "";
    @ViewChild('test', null) textDom: ElementRef;

    getChars(): string[] {
        return Array.from((this.text || "").trim());
    }

    export() {
        htmlToImage.toPng(this.textDom.nativeElement)
            .then((data) => {
                download(data, `${this.text}-unown.png`);
            });
    }
}