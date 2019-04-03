import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import {MatToolbarModule, MatTabsModule,MatDividerModule, MatListModule,MatInputModule,
        MatGridListModule, MatTreeModule,MatCardModule,MatExpansionModule,MatTableModule, 
        MatFormFieldModule,MatIconModule}from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MtbComponent} from './mountainBikes/mtb.component';
import{ViewWbComponent} from './mountainBikes/ViewWb.component';
import{AddBikeComponent} from './mountainBikes/addBike.component';
import{BikeConfigsComponent} from './BikeConfig/bikeConfigs.component';
import { ApiService } from './api.service';
import { ConfigDialogComponent } from './BikeConfig/configDialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MtbComponent,
    ViewWbComponent,
    AddBikeComponent,
    BikeConfigsComponent,
    ConfigDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatTreeModule,    
    MatCardModule,
    FormsModule,
    MatExpansionModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
   
   
  ],
  entryComponents:[ConfigDialogComponent],
  exports: [  
    MatToolbarModule
   
  ],
  providers: [ApiService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
