import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HelloWorldComponent]
})
export class AppModule {

  constructor(injector: Injector) {
    const custom = createCustomElement(HelloWorldComponent, {injector: injector});
    customElements.define('app-hello-world', custom);
  }

  ngDoBootstrap() {}

}
