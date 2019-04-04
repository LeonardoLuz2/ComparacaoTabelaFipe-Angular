import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VeiculoFormComponent } from './components/veiculo-form/veiculo-form.component';
import { VeiculoInfoComponent } from './components/veiculo-info/veiculo-info.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoFormComponent,
    VeiculoInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
