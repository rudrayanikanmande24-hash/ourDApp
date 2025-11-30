import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { cssHighlighterzDirective } from './shared/directive/cssHighHighlighter.directive';
import { RendererCssHighDirective } from './shared/directive/renderer-css-high.directive';
import { DirectiveToLowercaseDirective } from './shared/components/dirictive-to-lowercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    cssHighlighterzDirective,
    RendererCssHighDirective,
    DirectiveToLowercaseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
