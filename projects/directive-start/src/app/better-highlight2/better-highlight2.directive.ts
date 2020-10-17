import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight2]'
})
export class BetterHighlight2Directive implements OnInit{

  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight2') highlightColor = 'blue';
  // Better way to set background if that's all we want
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event): void{
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event): void{
    this.backgroundColor = this.defaultColor;
  }
}
