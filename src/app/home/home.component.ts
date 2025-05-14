import { Component, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private scrollListener: (() => void) | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.initParallaxEffect();
  }

  ngOnDestroy(): void {
    // Remove scroll event listener when component is destroyed
    if (this.scrollListener) {
      this.scrollListener();
      this.scrollListener = null;
    }
  }

  private initParallaxEffect(): void {
    const parallaxLayers = this.el.nativeElement.querySelectorAll('.parallax-layer');

    // Define the scroll handler
    const scrollHandler = () => {
      const scrollY = window.scrollY;

      parallaxLayers.forEach((layer: HTMLElement) => {
        const speed = parseFloat(layer.getAttribute('data-speed') || '0');
        const yPos = -(scrollY * speed);
        this.renderer.setStyle(layer, 'transform', `translateY(${yPos}px)`);
      });
    };

    // Add scroll event listener
    this.renderer.listen('window', 'scroll', scrollHandler);

    // Store the listener removal function
    this.scrollListener = () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }
}
