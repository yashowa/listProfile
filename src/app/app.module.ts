import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListAdressService } from './list-adress.service';
import { CommonModule } from '@angular/common';
import { FilterProfilePipe } from './filter-profile.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterProfilePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [ListAdressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
