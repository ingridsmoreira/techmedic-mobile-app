import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { LibModule } from './lib/lib.module';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';
import { StateModule } from './core/state/state.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FeaturesModule,
    LibModule,
    StateModule,
  ],
  providers: [Calendar],
  bootstrap: [AppComponent],
})
export class AppModule {}
