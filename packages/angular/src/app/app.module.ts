import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
})
export class AppModule {
  constructor(injector: Injector) {
    const MfeAngular = createCustomElement(AppComponent, { injector });
    customElements.define('mfe-angular', MfeAngular);
  }

  ngDoBootstrap(): void {}
}

declare global {
  interface HTMLElementTagNameMap {
    'mfe-angular': AppComponent & Element;
  }
}
