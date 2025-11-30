import { Directive, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectiveToLowercase]'   
})
export class DirectiveToLowercaseDirective implements OnInit{  

  constructor(
    private eleRef: ElementRef,
    private renderer: Renderer2
  ) {}

@HostListener('keyup', ['$event'])
onSearch(event: Event) {
  console.log((event.target as HTMLInputElement).value);
  let val = (event.target as HTMLInputElement).value as string
  (event.target as HTMLInputElement).value = val .toLowerCase()
  
}

ngOnInit(): void {
  
}

}
