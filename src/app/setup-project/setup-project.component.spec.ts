/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { Output, EventEmitter, Input } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SetupProjectComponent } from './setup-project.component';
import { AnalyzeSerService } from '../analyze-ser.service';

import {
  MatMenuModule, MatIconModule, MatCardModule, MatInputModule, MatButtonModule,
  MatFormFieldModule, MatSelectModule, MatChipsModule, MatRippleModule
} from '@angular/material';

import {CdkStep, CdkStepper} from '@angular/cdk/stepper';

describe('SetupProjectComponent', () => {
  let component: SetupProjectComponent;
  let fixture: ComponentFixture<SetupProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatMenuModule, MatIconModule, MatCardModule, MatInputModule, MatButtonModule,
        MatStepperModule, MatFormFieldModule, MatSelectModule, CdkStepperModule, 
        MatChipsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientTestingModule,
        MatRippleModule],
        declarations: [ SetupProjectComponent ],
        providers: [AnalyzeSerService],
        schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */
