import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { AppComponent } from './app.component';
import { AnalyzeCodeComponent } from './analyze-code/analyze-code.component';
import { AnalyzeQueryComponent } from './analyze-query/analyze-query.component';
import { ReportComponent } from './report/report.component';
import { MatStepperModule} from '@angular/material/stepper';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';

import {
  MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatButtonModule,
  MatListModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,
  MatCheckboxModule, MatSlideToggleModule, 
    MatRippleModule
} from '@angular/material';

import { ToasterServiceService } from './toaster-service.service';
// Import angular-fusioncharts
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as Widgets from "fusioncharts/fusioncharts.widgets";

import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { AnalyzePlatformComponent } from './analyze-platform/analyze-platform.component';
import { SetupProjectComponent } from './setup-project/setup-project.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatRadioModule} from '@angular/material/radio';

import { JwPaginationComponent } from 'jw-angular-pagination';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SetupProjectComponent,
    AnalyzeCodeComponent,
    AnalyzePlatformComponent,
    AnalyzeQueryComponent,
    JwPaginationComponent,
    ReportComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatSliderModule,
    HttpClientModule,
    MatChipsModule,
    FusionChartsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatRippleModule,
    CdkStepperModule,
    MatRadioModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],

  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  providers: [
    {
      provide: MatDialogRef,
    },
    ToasterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
