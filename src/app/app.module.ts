import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { AuthService } from '../app/services/auth.service';
import { RedundantComponent } from './redundant/redundant.component';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    RedundantComponent
  ],
  imports: [
    BrowserModule
  ],
  //providers: [ AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
