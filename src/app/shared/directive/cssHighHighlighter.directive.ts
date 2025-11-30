import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector:'[basicCss]'
})
export class cssHighlighterzDirective implements OnInit{
 constructor(
    private _eleRef : ElementRef
 ){
    
 }

 ngOnInit(): void {
     console.log(this._eleRef.nativeElement);
     this._eleRef.nativeElement.style.backgroundColor='aqua';
     this._eleRef.nativeElement.style.color='red';
     this._eleRef.nativeElement.style.padding='10px'
 }
}