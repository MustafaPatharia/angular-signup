import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
// import 'turn.js';

declare const $: any;

@Component({
  selector: 'app-flipbook',
  templateUrl: './flipbook.component.html',
  styleUrls: ['./flipbook.component.scss']
})
export class FlipbookComponent {
  @ViewChild('flipbookContainer') flipbookContainer!: ElementRef;

  constructor( ){}

  ngAfterViewInit() {
    const container = this.flipbookContainer.nativeElement;
    const pdfUrl = 'http://localhost:4200/assets/pdf/comic.pdf';

    // Load PDF document
    pdfjsLib.getDocument(pdfUrl).promise.then((pdf) => {
      console.log(pdf);
      // Fetch all pages
      const pagePromises = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        pagePromises.push(pdf.getPage(i));
      }

      Promise.all(pagePromises).then((pages) => {
        const flipbookOptions = {
          width: '100%',
          height: '100%',
          autoCenter: true
        };

        // Initialize the flipbook
        const flipbook = $(container).turn(flipbookOptions);

        // Add pages to the flipbook
        pages.forEach((page) => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          // Set canvas size to match page
          const viewport = page.getViewport({ scale: 1 });
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          // Render page content on canvas
          const renderContext = {
            canvasContext: context!,
            viewport: viewport
          };
          page.render(renderContext).promise.then(() => {
            flipbook.turn('addPage', canvas, page.pageIndex + 1);
          });
        });
      });
    });
  }
}
