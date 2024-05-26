import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  intersectionObserver!: IntersectionObserver;

  ngOnInit(): void {
    this.intersectionObserverIntialize();
    this.callInterSectionObserver();
  }

  intersectionObserverIntialize(): void {
    /**
     * root =>property identifies the Element or Document whose bounds are treated as the bounding box of the viewport for the element which is the observer's target.
     * threshold => 0.5 if half box is visibe then emit the observer
     */
    const config = {
      root: document.querySelector('.wrapper'), // Sets the framing element to the viewport
      rootMargin: '0px',
      threshold: 1,
    };
    this.intersectionObserver = new IntersectionObserver((observer) => {
      observer.forEach((item) => {
        item.target.classList.toggle('show', item.isIntersecting);
      });
    }, config);
  }

  callInterSectionObserver(): void {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      this.intersectionObserver.observe(card);
    });
  }
}
