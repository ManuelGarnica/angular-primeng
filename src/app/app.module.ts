import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
//import {SplitButtonModule} from 'primeng/splitbutton';
import {InputMaskModule} from 'primeng/inputmask';
import {GMapModule} from 'primeng/gmap';
//import {MenuItem} from 'primeng/api';  
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
	,FormsModule
	,AccordionModule
	,BrowserAnimationsModule
	,CalendarModule
	,InputMaskModule
	,GMapModule
	,FileUploadModule
	,HttpClientModule
	

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
