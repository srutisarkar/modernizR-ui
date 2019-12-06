import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportComponent } from './report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatButtonModule,
  MatListModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,
  MatCheckboxModule, MatSlideToggleModule, 
    MatRippleModule
} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';


describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatStepperModule, ReactiveFormsModule ],

      declarations: [ ReportComponent ],
       schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
