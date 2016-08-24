import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

@NgModule({
    declarations: [AppComponent],
    imports     : [BrowserModule, FormsModule, HttpModule],
    bootstrap   : [AppComponent],
    providers   : [APP_ROUTER_PROVIDERS]
})

export class AppModule {}