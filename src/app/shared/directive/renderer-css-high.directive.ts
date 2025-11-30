import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererCssHigh]'
})
export class RendererCssHighDirective implements OnInit{

  constructor(
    private _rederer : Renderer2,
    private _eleRef : ElementRef

  ) { }

  ngOnInit(): void {
//     this._rederer.setStyle(this._eleRef.nativeElement,"background-color","yellow")
//     this._rederer.setStyle(this._eleRef.nativeElement,"color","aqua")
// this._rederer.setStyle(this._eleRef.nativeElement,"padding","20px")
  
this._rederer.addClass(this._eleRef.nativeElement,"alert"),
this._rederer.addClass(this._eleRef.nativeElement,"alert-info")

setTimeout(()=>{
this._rederer.removeClass(this._eleRef.nativeElement,'alert')
this._rederer.removeClass(this._eleRef.nativeElement,'alert-info')
},5000)
  }
}
